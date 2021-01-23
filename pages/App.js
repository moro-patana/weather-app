import React, { useContext, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import TemperatueSideBar from "../components/TemperatureSideBar"
import TodayHightlights from '../components/TodayHightlights'
import WeatherPrediction from '../components/WeatherPrediction'
import { Context } from "../pages/Context"
import CursorCompass from "../img/cursor-fill.svg"
import Footer from "../components/footer"


export default function App() {
    const {isLoading, weather} = useContext(Context)
    const [isParams, setIsParams] = useState(false)
    return (
        <div className="weather">
            <TemperatueSideBar/>
            <div className="weather-card">
                {isLoading && <p className="loading">Loading...</p>}
                <WeatherPrediction setIsParams={setIsParams}/>
                {isParams 
                ?
                <Switch>
                    <Route path="/details/:weatherId">
                    <TodayHightlights/>
                    </Route>
                </Switch>
                :
                <div className="highlights">
                    <h3>Today's Hightlights</h3>
                {weather.consolidated_weather?.slice(0, 1).map(item => (

                <div className="highlights-details" key={item.id}>
                <div className="prediction-today wind">
                    <h4>Wind status</h4>
                    <p><span className="number">{Math.floor(Math.round(item.wind_speed))}</span> mph</p>
                    <button><img src={CursorCompass}/></button>
                    <p>{item.wind_direction_compass}</p>
                </div>
                <div className="prediction-today humidity">
                <h4>Humidity</h4>
                <p><span className="number">{item.humidity}</span> %</p>
                <div className="length">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                </div>
                <progress id="file" max="100" value={item.humidity}></progress>
                <span className="percentage">%</span>
                </div>
                <div className="prediction-today visibility">
                <h4>Visibility</h4>
                <p><span className="number">{Math.floor(Math.round(item.visibility))}</span> miles</p>
                </div>
                <div className="prediction-today air-pressure">
                <h4>Air Pressure</h4>
                <p><span className="number">{item.air_pressure}</span> mb</p>
                </div>
            </div>
                ))}
                </div>
        
}
            </div>
            <Footer/>
        </div>
    )
}
