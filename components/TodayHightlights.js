import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from "../pages/Context"
import CursorCompass from "../img/cursor-fill.svg"


export default function TodayHightlights() {
    const { weather } = useContext(Context)
    const { weatherId } = useParams()
    console.log(weather.consolidated_weather?.find(weather => weather.id === Number(weatherId)));
    const findWoeid = weather.consolidated_weather?.find(weather => weather.id === Number(weatherId));
    console.log(findWoeid);
    return (
        <div className="highlights">
            <h3>Today's Hightlights</h3>
            <div className="highlights-details" key={findWoeid?.id}>
                <div className="prediction-today wind">
                    <h4>Wind status</h4>
                    <p><span className="number">{Math.floor(Math.round(findWoeid?.wind_speed))}</span> mph</p>
                    <button><img src={CursorCompass}/></button>
                    <p>{findWoeid?.wind_direction_compass}</p>
                </div>
                <div className="prediction-today humidity">
                    <h4>Humidity</h4>
                    <p><span className="number">{findWoeid?.humidity}</span> %</p>
                    <div className="length">
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <progress id="file" max="100" value={findWoeid?.humidity}></progress>
                    <span className="percentage">%</span>
                </div>
                <div className="prediction-today visibility">
                    <h4>Visibility</h4>
                    <p><span className="number">{Math.floor(Math.round(findWoeid?.visibility))}</span> miles</p>
                </div>
                <div className="prediction-today air-pressure">
                    <h4>Air Pressure</h4>
                    <p><span className="number">{findWoeid?.air_pressure}</span>mb</p>
                </div>
            </div>
        </div>

    )
}
