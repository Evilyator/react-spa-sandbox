import React from "react"
import app from "../base"
import logo from "./../images/logo.svg"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="brand logo"/>
                </Link>
                <button
                    onClick={() => app.auth().signOut()}
                    className="btn btn--primary"
                >
                    Sign out
                </button>
            </div>
        </header>
    )
}

export default Header