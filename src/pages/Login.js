import React, {useCallback, useContext} from "react"
import {withRouter, Redirect} from "react-router"
import app from "../base.js"
import {AuthContext} from "../Auth.js"
import {Link} from "react-router-dom"
import Input from "../components/Input"

const Login = ({history}) => {
    const handleLogin = useCallback(
        async e => {
            e.preventDefault()
            const {email, password} = e.target.elements
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                alert(error)
            }
        },
        [history]
    )

    const {currentUser} = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="auth-page">
            <div className="auth-box">
                <div className="auth-box__header">
                    <h1 className="auth-box__headline">Sign in</h1>
                </div>
                <form onSubmit={handleLogin} className="auth-box__body">
                    <Input type="email" name="email" placeholder="Email"/>
                    <Input type="password" name="password" placeholder="Password" autoComplite="new-password"/>
                    <button type="submit" className="btn btn--primary btn--block">Login</button>
                </form>
                <div className="auth-box__footer">
                    <span>
                        Not a member? <Link to="/signup">Create Account</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)