import { useState } from "react";
import Clear from "./Component/Clear/Clear.jsx";
import SvgBackground from "./Component/SvgBackground.jsx";
import CityField from "./Component/CityField.jsx";

let openweathermap_API_KEY = "a8833f63319758a6fdfd6d647d816bfc";
let geoapify_API_KEY = "f75db0c92a0149ff904a1d6b8cf7fc15";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [forcast, setForcast] = useState("");
  const [intialArray, setIntialArray] = useState("");
  // const [weatherIcon, setWeatherIcon] = useState("");
  // const [loading, setLoading] = useState(false)

  function handleForcast(forcast) {
    setForcast(forcast);
  }

  function getWeather() {
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
              const intialSession = Math.ceil((24 - hours) / 3); // get how many session of 3 hours left to next day
              setIntialArray(intialSession - 1); // set intial array for selecting next 5 days weather forcast
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
          console.log("All done!");
        });
      });
  }

  function getMinTemp(array) {
    return Math.min(...array.map((item) => Math.round(item.main.temp_min)));
  }

  function getMaxTemp(array) {
    return Math.max(...array.map((item) => Math.round(item.main.temp_max)));
  }

  if (weather && forcast && intialArray) {
    let today = forcast.list.slice(0, intialArray);
    let subset_day1 = forcast.list.slice(intialArray, intialArray + 8);
    let subset_day2 = forcast.list.slice(intialArray + 8, intialArray + 16);
    let subset_day3 = forcast.list.slice(intialArray + 16, intialArray + 24);
    let subset_day4 = forcast.list.slice(intialArray + 24, intialArray + 32);

    return (
      <>
        <Clear />
        <CityField city={city} setCity={setCity} getWeather={getWeather} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
            backgroundColor: "#e6e6e633",
          }}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            <span>
              City : {city}
              <br />
              Temperature : {weather.main.temp}
              <br />
              Weather : {weather.weather[0].main}
              <img
                src={`https://openweathermap.org/img/wn/${forcast.list[0].weather[0].icon}.png`}
                alt={weather.weather[0].main}
              />
            </span>
          </div>
          <div style={{ padding: "5px" }}>
            <div style={{ textAlign: "center" }}> Today</div>
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${forcast.list[0].weather[0].icon}.png`}
                alt={forcast.list[0].weather[0].main}
              />
              <br />
              {getMaxTemp(today)}° {getMinTemp(today)}°
              <br />
            </span>
          </div>
          <div style={{ padding: "5px" }}>
            <div style={{ textAlign: "center" }}>D1</div>
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${forcast.list[8].weather[0].icon}.png`}
                alt={forcast.list[8].weather[0].main}
              />
              <br />
              {getMaxTemp(subset_day1)}° {getMinTemp(subset_day1)}°
              <br />
            </span>
          </div>
          <div style={{ padding: "5px" }}>
            <div style={{ textAlign: "center" }}>D2</div>
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${forcast.list[16].weather[0].icon}.png`}
                alt={forcast.list[16].weather[0].main}
              />
              <br />
              {getMaxTemp(subset_day2)}° {getMinTemp(subset_day2)}°
              <br />
            </span>
          </div>
          <div style={{ padding: "5px" }}>
            <div style={{ textAlign: "center" }}>D3</div>
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${forcast.list[24].weather[0].icon}.png`}
                alt={forcast.list[24].weather[0].main}
              />
              <br />
              {getMaxTemp(subset_day3)}° {getMinTemp(subset_day3)}°
              <br />
            </span>
          </div>
          <div style={{ padding: "5px" }}>
            <div style={{ textAlign: "center" }}>D4</div>
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${forcast.list[32].weather[0].icon}.png`}
                alt={forcast.list[32].weather[0].main}
              />
              <br />
              {getMaxTemp(subset_day4)}° {getMinTemp(subset_day4)}°
              <br />
            </span>
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

      <CityField city={city} setCity={setCity} getWeather={getWeather} />
    </>
  );
}

export default App;
