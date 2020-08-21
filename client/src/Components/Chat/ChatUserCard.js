import React from "react";
import "./chatUserCard.css";
import Avatar from "antd/lib/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";
import { connect } from 'react-redux';
import { setChatActiveUser } from './../../Redux/Chat/chat.actionCreators';

function ChatUserCard({title, id, setChatActiveUser, activeChat}) {
    const setActiveUser = () => {
        setChatActiveUser({title, id});
    };

    return (
        <div className={`chat-user-card  ${activeChat?.id===id? "active":""}` } onClick={setActiveUser}>
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

const mapStateToProps = ({activeChat}) => ({
    activeChat,
});

const mapDispatchToProps = dispatch=>({
    setChatActiveUser:(payload)=>{dispatch(setChatActiveUser(payload))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatUserCard);
