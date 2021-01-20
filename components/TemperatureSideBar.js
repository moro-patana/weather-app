import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import LocationMap from "../img/location-map.svg"
import SearchCity from './SearchCity'

export default function TemperatueSideBar() {
    const {weather, isLoading,fahrenheit,query,handleSearchCity, searchCity} = useContext(Context)
    
    return (
        <div className="sidebar">
            <button className="search-button" onClick={handleSearchCity}>Search for places</button>
            {isLoading && <p>Loading...</p>}
            {weather.consolidated_weather?.slice(0, 1).map(item => (
            <div key={item.id}>
                <img className="weather-icon" src={`https://www.metaweather.com//static/img/weather/${item.weather_state_abbr}.svg`}/>
                <p className="temperature">{Math.floor(Math.round(fahrenheit ? (item.max_temp * 9 / 5) + 32: item.max_temp))}&deg;{`${fahrenheit ? 'F' : "C"}`}</p>
                <p>{item.weather_state_name}</p>
                <p>Today {new Date(item.applicable_date).toDateString()}</p>
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
