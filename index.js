import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import { ContextProvider } from "./pages/Context"
import App from "./pages/App"

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App/>
        </Router>
    </ContextProvider>,document.getElementById("root"))