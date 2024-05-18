import { get_cityName } from "./get_cityName.js";
import { get_weather } from "./get_weather.js";

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
    

}