import React from "react";
import "./Header.css";
import {Input} from "antd";
const {Search} = Input;

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <p>LOGO 🚀 </p>
            </div>
            <div>
                <Search
                    placeholder="input search text"
                    size="medium"
                    onSearch={value => console.log(value)}
                    enterButton
                />
            </div>
        </div>
    );
}

export default Header;
