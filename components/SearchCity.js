import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import WeatherCard from "../components/WeatherCard"

export default function SearchCity() {
    const {query, setQuery, searchCity} = useContext(Context)
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
        </div>
    )
}
