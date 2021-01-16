import React from 'react'
import WeatherPrediction from "../components/WeatherPrediction"
import TemperatureSideBar from "../components/TemperatureSideBar"
import { Switch, Route} from "react-router-dom" 
import TodayHightlights from "../components/TodayHightlights"
import SearchCity from "../components/SearchCity"

export default function App() {
    return (
        <div className="container">
            <div className="sidebar-container">
            <SearchCity/>
            <TemperatureSideBar/>
            </div>
            <div className="weather">
            <WeatherPrediction/>
            <Switch>
                <Route path="/details/:weatherId">
                        <TodayHightlights/>
                    </Route>
            </Switch>
            </div>
        </div>
    )
}
