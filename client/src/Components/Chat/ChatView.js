import React, {useRef} from "react";
import "./chatView.css";
import Avatar from "antd/lib/avatar/avatar";
import MessageCard from "./MessageCard";
import Search from "antd/lib/input/Search";
import {SendOutlined} from "@ant-design/icons";
import {Input} from "antd";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import chatImage from "../../assets/undraw_status_update_jjgk.svg";
import {useEffect} from "react";
import db from "./../../utils/firebase";
import {useState} from "react";
function ChatView({activeChat, user}) {
    const chatRef = useRef();
    const [messagesData, setMessagesData] = useState([]);
    const [message, setMessage] = useState("");
    const handleMessageChange = e => {
        setMessage(e.target.value);
    };
    const sendMessage = e => {
        console.log(e, message);
        if (!!message && activeChat?.id) {
            const date = new Date().toString();
            console.log(date);
            const keyRef = db
                .collection("chat-test")
                .doc(activeChat?.id)
                .collection("messages_data")
                .doc();
            keyRef.set({
                username: user.fname + " " + user.lname,
                content: message,
                time: date,
            });
            setMessage("");
        }
        // setMessagesData([...messagesData,message])
        // db.collection("chat-test").add({
        //     username:"Max",
        //     message:"Hello max"
        // })

        console
            .log
            // db.collection("/chat-test/Tb8urFphACRfazzsfoev/messages_data")
            ();
    };
    useEffect(() => {
        if (activeChat?.id) {
            db.collection("chat-test")
                .doc(activeChat.id)
                .collection("messages_data")
                .onSnapshot(snapshot => {
                    const sortedArray = snapshot.docs
                        .map(doc => doc.data())
                        .sort(function (a, b) {
                            return new Date(a.time) - new Date(b.time);
                        });
                    setMessagesData(sortedArray);
                    console.log(sortedArray);
                });
        }
    }, [activeChat]);
    useEffect(() => {
        if (activeChat?.id) {
            chatRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messagesData]);
    if (!activeChat?.id) {
        return (
            <div
                className="chat-view"
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                   
                }}
            >
                <img src={chatImage} alt="" />
            </div>
        );
    }
    return (
        <div className="chat-view">
            <div className="chat-view-head">
                <Avatar size="large">
                    <p>{activeChat.title[0]}</p>
                </Avatar>
                <p>{activeChat.title}</p>
            </div>
            <div className="chat-content-comtainer" id="chatDiv">
                {messagesData.map((element, index) => {
                    return (
                        <MessageCard
                            username={element.username}
                            attachment={element.attachment}
                            content={element.content}
                        />
                    );
                })}
                <div ref={chatRef}></div>
            </div>
            <div className="chat-view-foot">
                <Input
                    size="large"
                    onChange={handleMessageChange}
                    placeholder="Type your message here"
                    value={message}
                />
                <Button onClick={sendMessage}>
                    <SendOutlined />
                </Button>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    activeChat: state.activeChat,
    user: state.user,
});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatView);
