import React from 'react'
import SearchCity from "../components/SearchCity"
import WeatherCard from "../components/WeatherCard"
import { Switch, Route} from "react-router-dom" 
import TodayHightlights from '../components/TodayHightlights'

export default function App() {
    return (
        <div>
            <h1>Onja Weather App</h1>
            <SearchCity/>
            <div className="woeid">
                <WeatherCard/>
                <Switch>
                    <Route path="/details/:weatherId">
                        <TodayHightlights/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
