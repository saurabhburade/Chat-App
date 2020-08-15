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
                <Link to={"/"}>Home</Link>
                {isAuth() ? (
                    <>
                        <Link to={"/chat"}>Chat</Link>
                        <Link onClick={handleLogout} to={"/login"}>Logout</Link>
                       
                    </>
                ) : (
                    <>
                        <Link to={"/login"}>Login</Link>
                        <Link to={"/register"}>Sign Up</Link>
                    </>
                )}

                {/* <Link to={"/login"}>Login</Link> */}
            </div>
        </div>
    );
}

export default Header;
