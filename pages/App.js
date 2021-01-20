import React, { useContext, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import TemperatueSideBar from "../components/TemperatureSideBar"
import TodayHightlights from '../components/TodayHightlights'
import WeatherPrediction from '../components/WeatherPrediction'
import { Context } from "../pages/Context"


export default function App() {
    const {isLoading, weather} = useContext(Context)
    const [isParams, setIsParams] = useState(false)
    return (
        <div className="weather">
            <TemperatueSideBar/>
            <div className="weather-card">
                {isLoading && <p>Loading...</p>}
                <WeatherPrediction setIsParams={setIsParams}/>
                {isParams 
                ?
                <Switch>
                    <Route path="/details/:weatherId">
                    <TodayHightlights/>
                    </Route>
                </Switch>
                :
                <div className="weather-predict">
                {weather.consolidated_weather?.slice(0, 1).map(item => (
            <div className="weather-today" key={item.id}>
                <h3>Today's Hightlights</h3>
            <div>
                <h4>Wind status</h4>
                <p>{Math.floor(Math.round(item.wind_speed))} mph</p>
                <p>{item.wind_direction_compass}</p>
            </div>
            <div>
            <h4>Humidity</h4>
            <p>{item.humidity} %</p>
            <div className="length">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <progress id="file" max="100" value={item.humidity}></progress>
            <span className="percentage">%</span>
            </div>
            <div>
            <h4>Visibility</h4>
            {Math.floor(Math.round(item.visibility))} miles
            </div>
            <div>
            <h4>Air Pressure</h4>
            {item.air_pressure} mb
            </div>
        </div>
                ))}
                </div>
        
}
            </div>
        </div>
    )
}
