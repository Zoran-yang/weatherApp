import { useState } from "react";
import Clear from "./Component/Clear/Clear.jsx";
import SvgBackground from "./Component/SvgBackground.jsx";
import CityInputField from "./Component/CityInputField.jsx";
import WeatherCard from "./Component/WeatherCard.jsx";
import LoadingAnimation from "./Animation/LoadingAnimation/LoadingAnimation.jsx";

let openweathermap_API_KEY = "a8833f63319758a6fdfd6d647d816bfc";
let geoapify_API_KEY = "f75db0c92a0149ff904a1d6b8cf7fc15";

function App() {
  // const [city, setCity] = useState("");
  const [city, setCity] = useState("london"); // for testing
  const [weather, setWeather] = useState("");
  const [forcast, setForcast] = useState("");
  const [startingNum, setStartingNum] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleForcast(forcast) {
    setForcast(forcast);
  }

  function getWeather() {
    setIsLoading(true);
    // get geo location of target city
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${openweathermap_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("geo", data);
        // get Timezone of target city for selecting next 5 days weather forcast
        const getTimezone = fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${data[0]["lat"]}&lon=${data[0]["lon"]}&format=json&apiKey=${geoapify_API_KEY}`
        )
          .then((resp) => resp.json())
          .then((result) => {
            if (result["results"]) {
              // console.log("result", result["results"][0]);
              const timezone =
                result["results"][0].timezone.offset_STD_seconds / 3600;
              const now = new Date();
              const hours = now.getUTCHours() + timezone; // get current hours of target city
              const startingSession = Math.ceil((24 - hours) / 3); // get how many session of 3 hours left to next day
              setStartingNum(startingSession - 1); // set intial array for selecting next 5 days weather forcast
            } else {
              console.log("No location found");
            }
          });
        // get current Weather of target city
        const getCurrentWeather = fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data[0]["lat"]}&lon=${data[0]["lon"]}&appid=${openweathermap_API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Weather", data);
            setWeather(data);
          });
        // get 5 days weather forcast of target city
        const getForcast = fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0]["lat"]}&lon=${data[0]["lon"]}&appid=${openweathermap_API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Forcast", data);
            handleForcast(data);
          });

        Promise.all([getTimezone, getCurrentWeather, getForcast]).then(() => {
          setIsLoading(false);
          console.log("All done!");
        });
      });
  }

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (weather && forcast && startingNum) {
    return (
      <>
        <Clear />
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#e6e6e633",
              height: "fit-content",
            }}
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
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "absolute",
          width: "100%", // Set parent to take up full width
          height: "100%", // Set parent to take up full height
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <SvgBackground />
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          backgroundColor: "#e6e6e633",
        }}
      >
        <div
          style={{
            backgroundColor: "#e6e6e633",
            height: "fit-content",
          }}
        >
          <CityInputField
            city={city}
            setCity={setCity}
            getWeather={getWeather}
          />
        </div>
      </div>
    </>
  );
}

export default App;
