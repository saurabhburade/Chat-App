import React from 'react'
import "./chat.css"
import ChatUsers from './ChatUsers';
import ChatView from './ChatView';
function Chat() {
    return (
        <>
        <div className="chat-container">
            <ChatUsers />
            <ChatView />
        </div>
        </>
    );
}

export default Chat
