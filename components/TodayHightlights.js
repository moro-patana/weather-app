import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from "../pages/Context"


export default function TodayHightlights() {
    const {woeid} = useContext(Context)
    const {weatherId} = useParams()
    console.log(woeid.consolidated_weather?.find(weather => weather.id === Number(weatherId)));
    const findWoeid = woeid.consolidated_weather?.find(weather => weather.id === Number(weatherId));
    console.log(findWoeid);
    return (
        <div className="weather">
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
            <progress id="file" max="100" value={findWoeid?.humidity}></progress>
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
