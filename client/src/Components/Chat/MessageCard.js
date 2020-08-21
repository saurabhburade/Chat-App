import React, {useState} from "react";
import "./messageCard.css";
import {connect} from "react-redux";
import Modal from "antd/lib/modal/Modal";
import { Button } from 'antd';
import {DownloadOutlined} from "@ant-design/icons";

function MessageCard({username, content, user, attachment}) {
    const [previewVisible, setPreviewVisible] = useState(false);
    const handleCancel = () => {
        setPreviewVisible(false);
    };
    const handlePreview = () => {
        setPreviewVisible(true);
    };
    const handleOk=()=>{
        
    }
    return (
        <>
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
                <p>{content || ""}</p>
                {attachment?.type &&
                attachment.type.split("/")[0] == "image" ? (
                    <img
                        className="w-100"
                        onClick={handlePreview}
                        src={attachment.url}
                        alt=""
                    />
                ) : attachment?.type  ? (
                    <div className="file d-flex justify-content-between align-items-center">
                        <p>{attachment.type.split("/")[0]} File</p>
                        <a href={attachment.url} download>
                            <Button
                                type="primary"
                                icon={
                                    <DownloadOutlined
                                        style={{color: "white"}}
                                    />
                                }
                            />
                        </a>
                    </div>
                ) : null}
            </div>
            {attachment?.type && attachment.type.split("/")[0] == "image" ? (
                <Modal
                    visible={previewVisible}
                    title={"Image"}
                    okText="Download"
                    onOk="handleOk"
                    okButtonProps={{download: true, href: attachment.url}}
                    onCancel={handleCancel}
                >
                    <img className="w-100" src={attachment.url} />
                </Modal>
            ) : null}
        </>
    );
}
const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(MessageCard);
