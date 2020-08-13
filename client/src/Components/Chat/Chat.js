import React from 'react'
import "./chat.css"
import ChatUsers from './ChatUsers';
import ChatView from './ChatView';
// import ChatHead from './ChatHead';
function Chat() {
    return (
        <>
        {/* <ChatHead/> */}
        <div className="chat-container">
            <ChatUsers />
            <ChatView />
        </div>
        </>
    );
}

export default Chat
