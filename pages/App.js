import React from 'react'
import WeatherPrediction from "../components/WeatherPrediction"
import TemperatureSideBar from "../components/TemperatureSideBar"
import { Switch, Route} from "react-router-dom" 
import TodayHightlights from "../components/TodayHightlights"
import SearchCity from "../components/SearchCity"

export default function App() {
    return (
        <div>
            <SearchCity/>
            <TemperatureSideBar/>
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
