import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from "../pages/Context"


export default function TodayHightlights() {
    const {weather} = useContext(Context)
    const {weatherId} = useParams()
    console.log(weather.consolidated_weather?.find(weather => weather.id === Number(weatherId)));
    const findWoeid = weather.consolidated_weather?.find(weather => weather.id === Number(weatherId));
    console.log(findWoeid);
    return (
        <div className="weather-predict">
        <h3>Today's Hightlights</h3>
        <div className="weather-today">
            <div>
                <h4>Wind status</h4>
                <p>{Math.floor(Math.round(findWoeid?.wind_speed))} mph</p>
                <p>{findWoeid?.wind_direction_compass}</p>
            </div>
            <div>
            <h4>Humidity</h4>
            <p>{findWoeid?.humidity} %</p>
            <div className="length">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <progress id="file" max="100" value={findWoeid?.humidity}></progress>
            <span className="percentage">%</span>
            </div>
            <div>
            <h4>Visibility</h4>
            {Math.floor(Math.round(findWoeid?.visibility))} miles
            </div>
            <div>
            <h4>Air Pressure</h4>
            {findWoeid?.air_pressure} mb
            </div>
        </div>
    </div>

    )
}
