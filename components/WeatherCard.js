import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function WeatherCard() {
    const {weather, woeid} = useContext(Context)
    console.log(woeid.consolidated_weather);
    return (
        <div className="weather-list">
            {woeid.consolidated_weather?.map(weather => (
            <div className="wetaher-list-item">
                <h4>{weather.created}</h4>
                <img src=""/>
                <ul>
                <li>{weather.max_temp}</li>
                <li>{weather.min_temp}</li>
                </ul>
            </div>
            ))}
        </div>
    )
}
