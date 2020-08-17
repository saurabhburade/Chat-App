import React, {useState} from "react";
import {Input, AutoComplete, notification} from "antd";
import {UserOutlined} from "@ant-design/icons";
import "./searchUser.css";
import axios from "axios";
import * as EmailValidator from "email-validator";
import Modal from "antd/lib/modal/Modal";
import {connect} from "react-redux";
import db from "./../../utils/firebase";
import {addChat} from "./../../Redux/Chat/chat.actionCreators";

const SearchUser = ({chatList, user, chatAdd}) => {
    const [options, setOptions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [searchedUser, setSearchedUser] = useState({});
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
                    console.log(res); //TODO res without token
                    setSearchedUser(res.data);
                    setOptions([{value: res.data.username}]);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            console.log("invalid email");
        }
    };
    const handleCancel = () => {
        setShowModal(false);
    };
    const handleSelect = () => {
        console.log(options, chatList);
        const present = chatList.find(element => {
            return options[0].value === element.title;
        });
        console.log(present);
        if (present) {
            notification["info"]({
                message: "Notification",
                description: "User already in chat list",
            });
        } else {
            setShowModal(true);
        }
    };
    const handleCreateChat = () => {
        console.log("create chat");
        console.log(searchedUser);
        const keyRef = db.collection("chat-test").doc();

        Promise.all([
            keyRef
                .collection("users")
                .doc()
                .set({
                    id: user._id,
                    username: user.fname + " " + user.lname,
                }),
            keyRef.collection("users").doc().set({
                id: searchedUser._id,
                username: searchedUser.username,
            }),
        ])
            .then(value => {
                console.log(value, keyRef.id);
                chatAdd({
                    id: keyRef.id,
                    type: "personal",
                    user: searchedUser._id,
                    title: searchedUser.username,
                })
            setShowModal(false);
                
            })
            .catch(err => {
                console.log("err");
            });
    };
    return (
        <>
            <Modal
                title="Basic Modal"
                onCancel={handleCancel}
                visible={showModal}
                onOk={handleCreateChat}
            >
                <p>User is not added in chat list...</p>
                <p>Confirm that you want to add user to chat list</p>
            </Modal>
            <AutoComplete
                style={{width: "100%"}}
                options={options}
                onSelect={handleSelect}
            >
                <Input.Search
                    style={{width: "100%"}}
                    size="large"
                    placeholder="Search an Email of your friend"
                    name="searchEmail"
                    onSearch={handleSearch}
                    autoComplete={true}
                />
            </AutoComplete>
        </>
    );
};

const mapStateToProps = state => ({
    chatList: state.chatList,
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    chatAdd: payload => dispatch(addChat(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
