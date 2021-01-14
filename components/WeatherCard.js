import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import { Link } from "react-router-dom"

export default function WeatherCard() {
    const {woeid, loading} = useContext(Context)
    console.log(loading);
    console.log(woeid.consolidated_weather);
    return (

        <div className="weather-list">
            {woeid.consolidated_weather?.map(weather => (
            <Link to={`/details/${weather.id}`} key={weather.id}>
                <div className="weather-list-item" key={weather.id}>
                    <h4>{new Date(weather.applicable_date).toDateString()}</h4>
                    <img src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`}/>                
                    <ul>
                    <li>{Math.floor(Math.round(weather.max_temp))}&deg;C</li>
                    <li>{Math.floor(Math.round(weather.min_temp))}&deg;C</li>
                    </ul>
                </div>
            </Link>
            ))}
        </div>
    )
}
