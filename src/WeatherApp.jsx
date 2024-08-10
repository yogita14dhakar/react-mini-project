import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css';
import { useState } from "react";

export default function WeatherApp() {
    let [weatherinfo, setWeatherInfo] = useState({
        city: "wonderland",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    })

    let updateInfo = (newInfo)=> {
        setWeatherInfo(newInfo);
    }
    return(
        <div className="weatherinfo">
            <h1 className="heading">GET WEATHER INFO</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}