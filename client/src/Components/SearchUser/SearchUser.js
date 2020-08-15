import React, {useState} from "react";

import {Input, AutoComplete} from "antd";
import {UserOutlined} from "@ant-design/icons";
import "./searchUser.css";
import axios from "axios";
import * as EmailValidator from "email-validator";

const SearchUser = () => {
    const [options, setOptions] = useState([]);
    const handleSearch = value => {
        console.log(value);
        if (EmailValidator.validate(value)) {
            axios
                .get("http://localhost:8000/api/all-users", {
                    headers: {
                        token: localStorage.getItem("token"),
                        "Content-Type": "application/json",
                        email: value,
                    },
                })
                .then(res => {
                    console.log(res);
                    setOptions([{value: res.data.username}]);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            console.log("invalid email");
        }
    };

    return (
        <AutoComplete style={{width: "100%"}} options={options}>
            <Input.Search
                style={{width: "100%"}}
                size="large"
                placeholder="Search an Email of your friend"
                name="searchEmail"
                onSearch={handleSearch}
            />
        </AutoComplete>
    );
};
export default SearchUser;
