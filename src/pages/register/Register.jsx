import "./register.css"
import {Link} from "react-router-dom"

function Register() {
    return (
        <div className="register">
        <span className="registerTitle">Regsiter</span>
        <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your name..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password" />
        <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
        <Link className="link" to="/login">LOGIN</Link>
        </button>
    </div>
    )
}

export default Register
