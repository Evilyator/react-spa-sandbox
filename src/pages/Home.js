import React from "react"
import app from "../base"
import Header from "../components/Header"

const Home = () => {
    let user = app.auth().currentUser

    return (
        <>
            <Header/>
            <div className="container">
                <span>Logged in as {user.email}</span>
            </div>
        </>
    )
}

export default Home