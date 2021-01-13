import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import WeatherCard from "../components/WeatherCard"

export default function SearchCity() {
    const {query, setQuery, searchCity,woeid } = useContext(Context)
 
    return (
        <div>
        <form className="form" onSubmit={searchCity}>
            <input 
                value = {query} 
                type="text"  
                placeholder="i.e london" 
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button">Search</button>
        </form>
        <WeatherCard/>
        <div className="weather">
            <h3>Today's Hightlights</h3>
            <div className="weather-today">
                <div>
                    <h4>Wind status</h4>
                    <p>{woeid.consolidated_weather ? Math.floor(Math.round(woeid.consolidated_weather[0].wind_direction)) : ""} mph</p>
                </div>
                <div>
                <h4>Humidity</h4>
                <p>{woeid.consolidated_weather ? woeid.consolidated_weather[0].humidity : ""} %</p>
                </div>
                <div>
                <h4>Visibility</h4>
                {woeid.consolidated_weather ? Math.floor(Math.round(woeid.consolidated_weather[0].visibility)) : ""} miles
                </div>
                <div>
                <h4>Air Pressure</h4>
                {woeid.consolidated_weather ? woeid.consolidated_weather[0].air_pressure : ""} mb
                </div>
            </div>
        </div>
       
        </div>
    )
}
