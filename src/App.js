import React from "react"
import "./styles/main.scss"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { AuthProvider } from "./Auth"
import PrivateRoute from "./PrivateRoute"

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <PrivateRoute exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
            </Router>
        </AuthProvider>
    )
}

export default App