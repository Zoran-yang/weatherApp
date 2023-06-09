// getMinTemp() and getMaxTemp() are used to get the min and max temperature of a day
export function getMinTemp(array) {
  return Math.min(...array.map((item) => Math.round(item.main.temp_min)));
}

export function getMaxTemp(array) {
  return Math.max(...array.map((item) => Math.round(item.main.temp_max)));
}

// getFurtureDayofWeek() is used to get the day of week of a day
export function getFurtureDayofWeek(date, i) {
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
