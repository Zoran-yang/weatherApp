import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import WeatherAnimation from "./Animation/WeatherAnimation.jsx";
import SvgBackground from "./Animation/SvgBackground.jsx";
import CityInputField from "./Component/CityInputField.jsx";
import WeatherCard from "./Component/WeatherCard.jsx";
import LoadingAnimation from "./Animation/LoadingAnimation/LoadingAnimation.jsx";
import Introduction from "./Animation/Introduction/Introduction.jsx";
import "./App.css";

let openweathermap_API_KEY = "a8833f63319758a6fdfd6d647d816bfc";
let geoapify_API_KEY = "f75db0c92a0149ff904a1d6b8cf7fc15";

// Services to make the api calls
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `HTTP error: ${response.status}, Data: ${JSON.stringify(errorData)}`
    );
  }
  return response.json();
}

async function fetchWeatherData(city) {
  const geoData = await fetchData(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${openweathermap_API_KEY}`
  );
  const lat = geoData[0]["lat"];
  const lon = geoData[0]["lon"];

  const [timezoneData, currentWeather, forcast] = await Promise.all([
    fetchData(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${geoapify_API_KEY}`
    ),
    fetchData(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweathermap_API_KEY}&units=metric`
    ),
    fetchData(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openweathermap_API_KEY}&units=metric`
    ),
  ]);

  const timezone =
    timezoneData["results"][0].timezone.offset_STD_seconds * 1000;
  const now = new Date();
  // take the current hour and add the timezone offset
  now.setTime(now.getTime() + timezone);
  let hours = now.getUTCHours();

  // Get the starting number for the forcast array
  // 24 - hours = hours left in the day
  // hours left in the day / 3 = number of 3 hour sessions left in the day
  const startingNum = Math.trunc((24 - hours) / 3);

  return { currentWeather, forcast, startingNum, now };
}

function App() {
  // const [city, setCity] = useState("");
  const [city, setCity] = useState("Taipei"); // ! for testing
  const [weather, setWeather] = useState("");
  const [forcast, setForcast] = useState("");
  const [startingNum, setStartingNum] = useState(null);
  const [date, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [AnimationFinished, setAnimationFinished] = useState(false);
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
  }));

  const mql = window.matchMedia("(max-width: 700px)");
  const getWeather = () => {
    setIsLoading(true);
    fetchWeatherData(city)
      .then(({ currentWeather, forcast, startingNum, now }) => {
        setWeather(currentWeather);
        setForcast(forcast);
        setStartingNum(startingNum);
        setDate(now);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error.message}`);
        setIsLoading(false);
      });
  };

  if (!AnimationFinished) {
    return <Introduction setAnimationFinished={setAnimationFinished} />;
  }

  //When fetch weather data, show loading animation
  if (isLoading) {
    return <LoadingAnimation />;
  }

  //When all data is ready, show weather card
  if (weather && forcast && startingNum !== null) {
    api.start({
      from: { opacity: 0, transform: "translateY(-100%)" },
      to: { opacity: 1, transform: "translateY(0%)" },
      config: { duration: 2000 },
    });

    return (
      <>
        <WeatherAnimation weather={weather.weather[0].main} />
        <div className="mainbody">
          <animated.div style={springs}>
            <div
              className="inputfield"
              style={mql.matches ? {} : { transform: "translate(0, -5%)" }}
            >
              <CityInputField
                city={city}
                setCity={setCity}
                getWeather={getWeather}
              />
              <WeatherCard
                city={city}
                weather={weather}
                forcast={forcast}
                startingNum={startingNum}
                date={date}
              />
            </div>
          </animated.div>
        </div>
      </>
    );
  }

  api.start({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: { duration: 2000 },
  });
  return (
    <>
      <div className="svgbackground background">
        <SvgBackground />
      </div>

      <div className="mainbody">
        <animated.div style={springs}>
          <div className="inputfield">
            <CityInputField
              city={city}
              setCity={setCity}
              getWeather={getWeather}
            />
          </div>
        </animated.div>
      </div>
    </>
  );
}

export default App;
