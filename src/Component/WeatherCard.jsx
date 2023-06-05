import Emphasize from "../Animation/Emphasize";

export default function WeatherCard({ city, weather, forcast, startingNum }) {
  let today = forcast.list.slice(0, startingNum);
  let subset_day1 = forcast.list.slice(startingNum, startingNum + 8);
  let subset_day2 = forcast.list.slice(startingNum + 8, startingNum + 16);
  let subset_day3 = forcast.list.slice(startingNum + 16, startingNum + 24);
  let subset_day4 = forcast.list.slice(startingNum + 24, startingNum + 32);

  function getMinTemp(array) {
    return Math.min(...array.map((item) => Math.round(item.main.temp_min)));
  }

  function getMaxTemp(array) {
    return Math.max(...array.map((item) => Math.round(item.main.temp_max)));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        // backgroundColor: "#e6e6e633",
        padding: "10px",
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <Emphasize>
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#fff",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            {city.toUpperCase()}
            <br />
            {Math.round(weather.main.temp)} °C
            <br />
            {weather.weather[0].main}
            <br />
            {/* <img
            src={`https://openweathermap.org/img/wn/${forcast.list[0].weather[0].icon}.png`}
            alt={weather.weather[0].main}
          /> */}
          </span>
        </Emphasize>
      </div>

      <div style={{ padding: "5px" }}>
        <Emphasize>
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
        </Emphasize>
      </div>
      <div style={{ padding: "5px" }}>
        <Emphasize>
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
        </Emphasize>
      </div>
      <div style={{ padding: "5px" }}>
        <Emphasize>
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
        </Emphasize>
      </div>
      <div style={{ padding: "5px" }}>
        <Emphasize>
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
        </Emphasize>
      </div>
      <div style={{ padding: "5px" }}>
        <Emphasize>
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
        </Emphasize>
      </div>
    </div>
  );
}
