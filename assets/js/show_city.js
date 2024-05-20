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

    //=================================== les 5 jour suivant ===================================;
    
    let day_today = get_dateInfo(objet.list[0].dt).day;
    let next_day=[];
    objet.list.forEach(element => {
        if(get_dateInfo(element.dt).day !== day_today){
            next_day.push(element);
        }
    });
    console.log(next_day);

    const article_otherDays = document.getElementById('other_days')
    article_otherDays.innerHTML='';
    //i am selecting the mid of the day then i'll iterate for it to fall every mid day
    for (let i=5; i<next_day.length;i +=8){

        const div = document.createElement('div');
        div.className ='other_days';

        const p_day= document.createElement('p');
        const p_icon = document.createElement('p');
        const p_min = document.createElement('p');
        const p_max = document.createElement('p');
        const p_hum = document.createElement('p');
        const p_wind = document.createElement('p');

        p_day.textContent =  get_dateInfo(next_day[i].dt).day_name;
        // p_icon.appendChild('');//cree une fonction qui vas metre la bonne icon plus neige etc;
        p_min.textContent = next_day[i].main.temp_max;
        p_max.textContent = next_day[i].main.temp_min;
        p_hum.textContent = next_day[i].main.humidity +'%';
        p_wind.textContent =(next_day[i].wind.speed * 3.6).toFixed(0) +'km/h';

        div.appendChild(p_day);
        div.appendChild(p_icon);
        div.appendChild(p_min);
        div.appendChild(p_max);
        div.appendChild(p_hum);
        div.appendChild(p_wind);
        article_otherDays.appendChild(div);
        
    }

}