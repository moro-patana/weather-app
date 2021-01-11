import React, { useState, useEffect } from 'react'
const Context = React.createContext()
const API_URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london"
export default function ContextProvider({children}) {
    const [weather, setWeather] = useState([])
    async function fetchWeather() {
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data);
        setWeather(data)
    }
    useEffect(() => {
        fetchWeather()
    }, [])
    return (
        <Context.Provider value={{weather}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}
