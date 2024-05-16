import { get_cityName } from "./get_cityName.js";
import { get_weather } from "./get_weather.js";

get_cityName().then(city => get_weather(city).then(data =>{
  console.log(data);
}));
// get_cityName()
//     .then(city => get_weather(city))
//     .then(data => console.log(data))
//     .catch(error => console.error("An error occurred:", error));

