import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { RaterProject } from "./components/RaterProject"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <RaterProject />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
