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

export default async function fetchWeatherData(city) {
  // Get the lat and lon of the city
  const geoData = await fetchData(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${openweathermap_API_KEY}`
  );
  if (geoData.length === 0) throw new Error("No such city!");
  const lat = geoData[0]["lat"];
  const lon = geoData[0]["lon"];

  // Get the timezone offset, current weather and weather forcast for next 5 days
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
