import React from 'react'
import "./chatUserCard.css"
import Avatar from 'antd/lib/avatar/avatar';
import {UserOutlined} from "@ant-design/icons";

function ChatUserCard() {
    return (
        <div className="chat-user-card">
            <div>
                <Avatar size="large">
                    <p>J</p>
                </Avatar>
            </div>
            <div>
                <p>John Doe</p>
                <p>Message Here</p>
            </div>
        </div>
    );
}

export default ChatUserCard
