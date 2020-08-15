import React from "react";
import ChatUserCard from "./ChatUserCard";
import {Input} from "antd";
import "./chatUsers.css";
import SearchUser from './../SearchUser/SearchUser';

const {Search} = Input;

function ChatUsers() {
    return (
        <div className="chat-users-main">
            <div>
                <SearchUser />
            </div>
            <div className="chat-users-container">
                <ChatUserCard />
                <ChatUserCard />
                <ChatUserCard />
                <ChatUserCard />
                <ChatUserCard />
                <ChatUserCard />
                <ChatUserCard />
            </div>
        </div>
    );
}

export default ChatUsers;
