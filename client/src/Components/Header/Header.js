import React from "react";
import "./Header.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {LoginOutlined} from "@ant-design/icons";

import {Input, Button} from "antd";
import {isAuth} from "./../../utils/auth";
const {Search} = Input;

function Header() {
    const handleLogout=()=>{
        localStorage.clear();
        window.location.href="/login"
    }
    return (
        <div className="header">
            <div className="logo">
                <p>LOGO 🚀 </p>
            </div>
            <div className="nav-links">
                {/* <Search
                    placeholder="input search text"
                    size="medium"
                    onSearch={value => console.log(value)}
                    enterButton
                /> */}
                <Link className="navLink" to={"/"}>
                    Home
                </Link>
                {isAuth() ? (
                    <>
                        <Link className="navLink" to={"/chat"}>
                            Chat
                        </Link>
                        <Link
                            className="navLink"
                            onClick={handleLogout}
                            to={"/login"}
                        >
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link className="navLink" to={"/login"}>
                            Login
                        </Link>
                        <Link className="navLink" to={"/register"}>
                            Sign Up
                        </Link>
                    </>
                )}

                {/* <Link to={"/login"}>Login</Link> */}
            </div>
        </div>
    );
}

export default Header;
