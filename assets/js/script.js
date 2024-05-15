import { get_weather } from "./get_weather.js";
get_weather("couillet").then(weatherData => {
    console.log(weatherData);
  });