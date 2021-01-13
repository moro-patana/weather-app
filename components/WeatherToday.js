// import React, { useContext } from 'react'
// import { Link } from "react-router-dom"
// import { Context } from "../pages/Context"
// export default function WeatherToday() {
//     const {woeid} = useContext(Context)
//     return (
//         <div className="weather-list">
//         <Link to={`/details/${woeid.consolidated_weather[0]?.id}`} key={weather.id}>
//             <div className="weather-list-item" key={woeid.consolidated_weather[0]?.id}>
//                 <h4>{new Date(woeid.consolidated_weather[0]?.applicable_date).toDateString()}</h4>
//                 <img src={`https://www.metaweather.com//static/img/weather/${woeid.consolidated_weather[0]?.weather_state_abbr}.svg`}/>                
//                 <ul>
//                 <li>{Math.floor(Math.round(woeid.consolidated_weather[0]?.max_temp))}&deg;C</li>
//                 <li>{Math.floor(Math.round(woeid.consolidated_weather[0]?.min_temp))}&deg;C</li>
//                 </ul>
//             </div>
//         </Link>
//     </div>
//      )
// }
