import React from 'react'
import "./chatView.css"
import Avatar from 'antd/lib/avatar/avatar';
import MessageCard from './MessageCard';
import Search from 'antd/lib/input/Search';
import {SendOutlined} from "@ant-design/icons";

import { Input } from 'antd';
import { Button } from 'react-bootstrap';
function ChatView() {
    return (
        <div className="chat-view">
            <div className="chat-view-head">
                <Avatar size="large">
                    <p>J</p>
                </Avatar>
                <p>John Doe</p>
            </div>
            <div className="chat-content-comtainer">
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
            </div>
            <div className="chat-view-foot">
                <Input size="large" placeholder="Type your message here"/>
                <Button>
                    <SendOutlined />
                </Button>
            </div>
        </div>
    );
}

export default ChatView
