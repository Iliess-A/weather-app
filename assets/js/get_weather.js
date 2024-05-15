export async function get_weather(city){

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=096d4eb665292c3c6b4078b74835dbd9&units=metric
        `);
        
        const data = await response.json();
        return data;

    } catch (error) {

        console.error("An error occurred while fetching the weather data:", error);
    }
      
}