import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import LocationMap from "../img/location-map.svg"
import SearchCity from './SearchCity'

export default function TemperatueSideBar() {
    const {weather, isLoading,fahrenheit,query,handleSearchCity, searchCity} = useContext(Context)
    
    return (
        <div className="sidebar">
            <button className="open-modal" onClick={handleSearchCity}>Search for places</button>
            {isLoading && <p className="loading">Loading...</p>}
            {weather.consolidated_weather?.slice(0, 1).map(item => (
            <div className="weather-today" key={item.id}>
                <img className="weather-icon" src={`https://www.metaweather.com//static/img/weather/${item.weather_state_abbr}.svg`}/>
                <p className="temperature">{Math.floor(Math.round(fahrenheit ? (item.max_temp * 9 / 5) + 32: item.max_temp))}&deg;{`${fahrenheit ? 'F' : "C"}`}</p>
                <p className="weather-name">{item.weather_state_name}</p>
                <div className="date">
                    <span>Today</span> 
                    <span>.</span>
                    <span>{new Date(item.applicable_date).toDateString()}</span>
                </div>
                <div className="location">
                    <img className="icon" src={LocationMap} alt="icon for the location map"/>
                    <p>{query}</p>
                </div>
            </div>
            ))}
            {searchCity && <SearchCity/>}
        </div>
    )
}
