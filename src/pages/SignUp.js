import React, {useCallback} from "react"
import {withRouter} from "react-router"
import app from "../base"
import {Link} from "react-router-dom"
import Input from "../components/Input"

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async e => {
        e.preventDefault()
        const {email, password} = e.target.elements
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
            history.push("/")
        } catch (error) {
            alert(error)
        }
    }, [history])

    return (
        <div className="auth-page">
            <div className="auth-box">
                <div className="auth-box__header">
                    <h1 className="auth-box__headline">Sign up</h1>
                </div>
                <form onSubmit={handleSignUp} className="auth-box__body">
                    <Input type="email" name="email" placeholder="Email"/>
                    <Input type="password" name="password" placeholder="Password" autoComplite="new-password"/>
                    <button type="submit" className="btn btn--primary btn--block">Sign Up</button>
                </form>
                <div className="auth-box__footer">
                    <span>
                        Already a member? <Link to="/login">Login</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignUp)