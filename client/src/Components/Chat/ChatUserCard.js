import React from "react";
import "./chatUserCard.css";
import Avatar from "antd/lib/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";
import { connect } from 'react-redux';
import { setChatActiveUser } from './../../Redux/Chat/chat.actionCreators';

function ChatUserCard({title, id, setChatActiveUser}) {
    const setActiveUser = () => {
        
        setChatActiveUser({title, id});
    };

    return (
        <div className="chat-user-card" onClick={setActiveUser}>
            <div>
                <Avatar size="large">
                    <p>{title[0]}</p>
                </Avatar>
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    );
}


const mapDispatchToProps = dispatch=>({
    setChatActiveUser:(payload)=>{dispatch(setChatActiveUser(payload))}
})

export default connect(null,mapDispatchToProps)(ChatUserCard);
