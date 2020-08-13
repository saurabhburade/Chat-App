import React from "react";
import "./Login.css";
import {Input} from "antd";
import {Button} from "react-bootstrap";
import loginImage from "../../assets/undraw_status_update_jjgk.svg"
function Login() {
    const handleLogin = e => {
        e.preventDefault();
        console.log("login", e.target.email.value);
    };
    return (
        <div className="login-container">
            <form className="form" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input.Password type="password" name="password" required />
                </div>
                <Button type="submit" size={"sm"}>
                    Login
                </Button>
            </form>
            <img src={loginImage} className="loginImage" alt="" />
        </div>
    );
}

export default Login;
