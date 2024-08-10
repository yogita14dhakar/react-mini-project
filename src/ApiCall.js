let getWeatherInfo = async(city)=> {
    try{let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
    let jsonresponse = await response.json();
    let result = {
        city: city,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelsLike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description
    }
    return result;}catch(err){
        throw err;
    }
}


export default getWeatherInfo;