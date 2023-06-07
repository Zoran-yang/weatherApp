import Emphasize from "../Animation/Emphasize";

function ForecastCard({ session, day, order, forcast }) {
  return (
    <div style={{ padding: "5px" }}>
      <Emphasize>
        <div>{day}</div>
        <div>
          {/* The icon is the weather condition of the same point of searching time of a day */}
          <img
            src={`https://openweathermap.org/img/wn/${
              forcast.list[order * 8].weather[0].icon
            }.png`}
            alt={forcast.list[order * 8].weather[0].main}
            className="weather-icon"
          />
          <br />
          {getMaxTemp(session)}° {getMinTemp(session)}°
          <br />
        </div>
      </Emphasize>
    </div>
  );
}

// getMinTemp() and getMaxTemp() are used to get the min and max temperature of a day
function getMinTemp(array) {
  return Math.min(...array.map((item) => Math.round(item.main.temp_min)));
}

function getMaxTemp(array) {
  return Math.max(...array.map((item) => Math.round(item.main.temp_max)));
}

// getFurtureDayofWeek() is used to get the day of week of a day
function getFurtureDayofWeek(date, i) {
  const futureDate = new Date(date.getTime());
  futureDate.setDate(date.getDate() + i);

  const dayOfWeekIndex = futureDate.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return isNaN(dayOfWeekIndex) ? null : daysOfWeek[dayOfWeekIndex];
}

export default function WeatherCard({
  city,
  weather,
  forcast,
  startingNum,
  date,
}) {
  // Forcast data is divided into today and 4 days, each day has 8 data points
  const session = Array(5)
    .fill(0)
    .map((_, i) => {
      if (startingNum === 0)
        return forcast.list.slice(
          startingNum + i * 8,
          startingNum + (i + 1) * 8
        );

      if (i === 0) {
        return forcast.list.slice(0 + i * 8, startingNum + i * 8);
      }

      return forcast.list.slice(startingNum + (i - 1) * 8, startingNum + i * 8);
    });
  const initialDay = startingNum === 0 ? "Tomorrow" : "Today";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      <div style={{ width: "100%" }}>
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
            {getFurtureDayofWeek(date, 0)}
            <br />
            {Math.round(weather.main.temp)} °C
            <br />
            {weather.weather[0].main}
            <br />
          </span>
        </Emphasize>
      </div>

      {session.map((sessionData, i) => (
        <ForecastCard
          key={i}
          session={sessionData}
          day={i === 0 ? initialDay : `${getFurtureDayofWeek(date, i)}`}
          order={i}
          forcast={forcast}
        />
      ))}
    </div>
  );
}
