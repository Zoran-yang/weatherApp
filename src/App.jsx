import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import WeatherAnimation from "./Animation/WeatherAnimation.jsx";
import SvgBackground from "./Animation/SvgBackground.jsx";
import CityInputField from "./Component/CityInputField.jsx";
import WeatherCard from "./Component/WeatherCard.jsx";
import LoadingAnimation from "./Animation/LoadingAnimation/LoadingAnimation.jsx";
import Introduction from "./Animation/Introduction/Introduction.jsx";
import fetchWeatherData from "./apiService.jsx";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  // const [city, setCity] = useState("Taipei"); // ! for testing
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState("");
  const [forcast, setForcast] = useState("");
  const [startingNum, setStartingNum] = useState(null);
  const [date, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [AnimationFinished, setAnimationFinished] = useState(false);
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
  }));

  const getWeather = () => {
    setIsLoading(true);
    fetchWeatherData(city)
      .then(({ currentWeather, forcast, startingNum, now }) => {
        setWeather(currentWeather);
        setForcast(forcast);
        setStartingNum(startingNum);
        setDate(now);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error.message}`);
        setIsError(true);
        setIsLoading(false);
      });
  };

  // When first time visit, show introduction animation
  if (isFirstVisit) {
    return <Introduction setIsFirstVisit={setIsFirstVisit} />;
  }

  //When fetch weather data, show loading animation
  if (isLoading) {
    return <LoadingAnimation />;
  }

  //When all data is ready, show weather card
  if (weather && forcast && startingNum !== null) {
    // When first time visit, show introduction animation
    if (!AnimationFinished) {
      api.start({
        from: { opacity: 0, transform: "translateY(-100%)" },
        to: { opacity: 1, transform: "translateY(0%)" },
        config: { duration: 1000 },
      });
      setAnimationFinished(true);
    }

    return (
      <>
        <WeatherAnimation weather={weather.weather[0].main} />
        <div className="mainbody">
          <animated.div style={springs}>
            <div className="inputfield">
              <CityInputField
                city={city}
                setCity={setCity}
                getWeather={getWeather}
                isError={isError}
                setCityName={setCityName}
              />
              <WeatherCard
                city={cityName}
                weather={weather}
                forcast={forcast}
                startingNum={startingNum}
                date={date}
                isError={isError}
              />
            </div>
          </animated.div>
        </div>
      </>
    );
  }

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
              isError={isError}
              setCityName={setCityName}
            />
          </div>
        </animated.div>
      </div>
    </>
  );
}
