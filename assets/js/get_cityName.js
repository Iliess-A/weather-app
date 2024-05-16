export function get_cityName(){
    return new Promise((resolve) => {
        const input_city = document.getElementById('search_country');
        const button = document.getElementById('submit_city'); 

        const getCityNameAndResolve = () => {
            let cityName = input_city.value;
            input_city.value="";
            console.log(cityName);
            resolve(cityName);
        }

        input_city.addEventListener('keyup', event => {
            if(event.code ==='Enter'){
                getCityNameAndResolve();
            }
        });

        button.addEventListener('click', getCityNameAndResolve);
    });
}
