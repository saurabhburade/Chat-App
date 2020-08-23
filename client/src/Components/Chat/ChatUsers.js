import React, {useEffect} from "react";
import ChatUserCard from "./ChatUserCard";
import {Input} from "antd";
import "./chatUsers.css";
import SearchUser from "./../SearchUser/SearchUser";
import {connect} from "react-redux";
import {fetchChats} from "./../../Redux/Chat/chat.actionCreators";
import db from "../../Utils/firebase";

const {Search} = Input;

function ChatUsers(props) {
    useEffect(() => {
        props.fetchChats();
        console.log("object", props.chatList);
      
    }, []);
    return (
        <div className="chat-users-main">
            <div>
                <SearchUser />
            </div>
            <div className="chat-users-container">
                {props.chatList.map((element, index) => {
                    return (
                        <ChatUserCard
                            title={element.title}
                            id={element.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    chatList: state.chatList,
});

const mapDispatchToProps = dispatch => ({
    fetchChats: () => dispatch(fetchChats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatUsers);
