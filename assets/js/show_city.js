import { get_cityName } from "./get_cityName.js";
import { get_weather } from "./get_weather.js";
import { get_dateInfo } from "./get_dateInfo.js";

const submit_city = document.getElementById('submit_city');
const input_city = document.getElementById('search_country');


export function show_city(){

    input_city.addEventListener('keyup',event=>{
        if(event.code ==='Enter'){
            let city_info = get_weather(get_cityName()).then(data=>{
                dom_affichage(data);
            });
            
            
        }
    })
    submit_city.addEventListener('click',event=>{
        let city_info = get_weather(get_cityName()).then(data=>{
            dom_affichage(data);
        });
    })
    
}

function dom_affichage(objet){
    console.log(objet);
    const main_day = document.getElementById('today_day');
    const main_temp = document.getElementById('main_temp');
    const main_min = document.getElementById('main_min');
    const main_max = document.getElementById('main_max');
    const main_hum = document.getElementById('main_hum');
    const main_wind = document.getElementById('main_wind');

    main_day.textContent = get_dateInfo(objet.list[0].dt).day_name;
    main_temp.textContent = objet.list[0].main.temp +'°C';
    main_min.textContent = objet.list[0].main.temp_min +'°C';;
    main_max.textContent = objet.list[0].main.temp_max +'°C';;
    main_hum.textContent = objet.list[0].main.humidity +'%';
    main_wind.textContent = (objet.list[0].wind.speed * 3.6).toFixed(0) +'km/h';
    
}