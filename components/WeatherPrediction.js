
import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import {Context} from "../pages/Context"
export default function WeatherPrediction({setIsParams}) {
    const {weather, isLoading, fahrenheit,setFahrenheit} = useContext(Context)
    console.log(weather);
    return (
    <div className="prediction">
        <div className="temp">
        <button onClick={() => setFahrenheit(false)}>&deg;C</button>
        <button onClick={() => setFahrenheit(true)}>&deg;F</button>
        </div>
        {isLoading && <p>Loading...</p>}
        <div className="weather-list">
         {weather.consolidated_weather?.slice(1).map(item => (
        <Link to={`/details/${item.id}`} key={item.id} onClick={() => setIsParams(true)}>
            <div className="weather-list-item" key={item.id}>
                <h4>{new Date(item.applicable_date).toDateString()}</h4>
                <img src={`https://www.metaweather.com//static/img/weather/${item.weather_state_abbr}.svg`}/>                
                <ul className="weather-temp">
                <li>{Math.floor(Math.round(fahrenheit ? (item.max_temp * 9 / 5) + 32: item.max_temp))}&deg;{`${fahrenheit ? 'F' : "C"}`}</li>
                <li>{Math.floor(Math.round(fahrenheit ? (item.min_temp * 9 / 5) + 32: item.min_temp))}&deg;{`${fahrenheit ? 'F' : "C"}`}</li>
                </ul>
            </div>
        </Link>
        ))}
    </div>
    </div>
    )
}


