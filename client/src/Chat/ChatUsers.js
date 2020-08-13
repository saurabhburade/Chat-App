import React from "react";
import ChatUserCard from "./ChatUserCard";
import {Input} from "antd";
import "./chatUsers.css";

const {Search} = Input;

function ChatUsers() {
    return (
        <div className="chat-users-main">
            <div>
                <Search
                    placeholder="input search text"
                    size="medium"
                    onSearch={value => console.log(value)}
                    enterButton
                />
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
