import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import {Link} from "react-router-dom"
import LocationMap from "../img/location-map.svg"

export default function TemperatueSideBar() {
    const {weather, isLoading,fahrenheit,name, setName, query,searchCity,getLocationName, handleSearchCity, handleSubmit,handleSelectCity, city} = useContext(Context)
    
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
            {/* {searchCity && 
                   <div className="form-input">
                   <form className="form" onSubmit={getLocationName}>
                       <input 
                           value = {name} 
                           type="text"  
                           placeholder="i.e london" 
                           onChange={(e) => setName(e.target.value)}
                       />
                       <button className="button">Search</button>
                   </form>
                <div className="city-names">
                   {city.map(item => (<button className="cities" onClick={() => handleSelectCity(item.title)} id={item.woeid}>{item.title}</button>))}
                </div>
                   </div>
} */}
        </div>
    )
}
