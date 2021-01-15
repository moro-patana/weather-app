import React, { useState,useEffect } from 'react'
const Context = React.createContext()
const CORS_URL = "https://cors-anywhere.herokuapp.com/"

export default function ContextProvider({children}) {
    const [isLoading, setIsLoading] = useState(true)
    const [woeid, setWoeid] = useState([])
    const [query,setQuery] = useState("Helsinki")
    const [name, setName] = useState("Helsinki")
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState([])
    const [searchCity, setSearchCity] = useState(false)
    const [fahrenheit, setFahrenheit] = useState(false)
    async function fetchData() {
        const WOEID_URL = `https://www.metaweather.com/api/location/search/?query=${query}`
        const response = await fetch(CORS_URL + WOEID_URL)
        const data = await response.json()
        setWoeid(data)
        console.log(data);
        const WEATHER_URL = `https://www.metaweather.com/api/location/${data[0].woeid}/`
        if (data.length) {
            const response = await fetch(CORS_URL + WEATHER_URL)
            const data = await response.json()
            setWeather(data)
            console.log(data);
        }
        setIsLoading(false)
    }
    async function fetchCity() {
        const WOEID_URL = `https://www.metaweather.com/api/location/search/?query=${name}`
        const response = await fetch(CORS_URL + WOEID_URL)
        const data = await response.json()
        setCity(data)
        console.log(data);
    }
    console.log(woeid.length);
    useEffect(() => {
        fetchData()
        fetchCity()
    }, [])
    function handleSearchCity() {
        setSearchCity(!searchCity)
    }
     function handleSubmit(e) {
        e.preventDefault()
        fetchCity()
    }
    function getLocationName(e) {
        e.preventDefault()
        setName(e.target.value)
        fetchCity()
    }
    function handleSelectCity(params) {
        setQuery(params)
        console.log(params);
        fetchData()
        setSearchCity(false)
    }
    return (
        <Context.Provider value={{query, setQuery, name, setName, woeid, weather, searchCity,handleSelectCity, handleSearchCity
        ,handleSubmit, city, isLoading,fahrenheit, setFahrenheit,getLocationName}}>
            {children}
        </Context.Provider>
     )
}
export {ContextProvider, Context}
