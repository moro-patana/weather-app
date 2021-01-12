import React, { useState, useEffect } from 'react'
const Context = React.createContext()

export default function ContextProvider({children}) {
    const [query, setQuery] = useState("london")
    const [weather, setWeather] = useState([])
    const [woeid, setWoeid] = useState({})

    async function fetchWeather() {
        // const query = "london"
        console.log(query);
        const API_URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`
        
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data);
        setWeather(data)
        console.log(data[0].woeid);
        const WEATHER_URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${data[0].woeid}/`
        if (data.length) {
            const res = await fetch(WEATHER_URL)
            const weatherData = await res.json()
            console.log(weatherData);
            setWoeid(weatherData)
        }
    }
    useEffect(() => {
        fetchWeather()
    }, [])
    function searchCity(e) {
    e.preventDefault()
    console.log(e.target)
    fetchWeather()
    }
    return (
        <Context.Provider value={{weather, setWeather, query, setQuery, searchCity, woeid}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}
