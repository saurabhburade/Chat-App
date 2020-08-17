import React from "react";
import "./messageCard.css";
import {connect} from "react-redux";
function MessageCard({username, content,user}) {
    return (
        <div
            className={`message-card ${
                user.fname + " " + user.lname === username
                    ? "usermessage"
                    : null
            }`}

            // style={{(user.fname+" "+ user.lname===username)? fontSize:null}}
            // {(user.fname+" "+ user.lname===username)? `style={{fontWeight:700}}` : null}
        >
            <p>{username}</p>
            <p>{content}</p>
        </div>
    );
}
const mapStateToProps = state => ({
    user: state.user,
});


export default connect(mapStateToProps)(MessageCard);
