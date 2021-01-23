
import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import {Context} from "../pages/Context"
import TodayHightlights from "../components/TodayHightlights"
export default function WeatherPrediction({setIsParams}) {
    const {weather,fahrenheit,setFahrenheit} = useContext(Context)
    console.log(weather);
    return (
    <div className="weather-container">
         <div className="temperature-btn">
                <button className={fahrenheit ? "btn dark-blue" : "btn active"} onClick={() => setFahrenheit(false)}>&deg;C</button>
                <button className={fahrenheit ? "btn active" : "btn dark-blue"} onClick={() => setFahrenheit(true)}>&deg;F</button>
        </div>
        <div className="weather-list">
         {weather.consolidated_weather?.slice(1).map(item => (
            <Link key={item.id} className="weather-link" to={`/details/${item.id}`} onClick={() => setIsParams(true)}>
                <div className="weather-list-item" key={item.id}>
                    <h4>{new Date(item.applicable_date).toDateString()}</h4>
                    <img src={`https://www.metaweather.com//static/img/weather/${item.weather_state_abbr}.svg`}/>                
                    <ul className="weather-temp">
                    <li className="max-temp">{Math.floor(Math.round(fahrenheit ? (item.max_temp * 9 / 5) + 32: item.max_temp))}&deg;{`${fahrenheit ? 'F' : "C"}`}</li>
                    <li className="min-temp">{Math.floor(Math.round(fahrenheit ? (item.min_temp * 9 / 5) + 32: item.min_temp))}&deg;{`${fahrenheit ? 'F' : "C"}`}</li>
                    </ul>
                </div>
            </Link>
        ))}
        </div>
    </div>
    )
}


