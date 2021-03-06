import React from "react";
import image from "../../assets/chat1.svg";
import chatimage from "../../assets/chat1.JPG";
import "./home.css";
import {Button} from "react-bootstrap";
import {Steps, Tooltip,Button as AntButton} from "antd";
import {Link} from "react-router-dom";
import {isAuth} from "../../Utils/auth";
import reactIcon from "../../assets/reactjs.svg"
import reduxIcon from "../../assets/redux.svg";
import nodeIcon from "../../assets/nodejs.svg";
import expreeIcon from "../../assets/express.svg";
import mongoIcon from "../../assets/mongo.svg";
import bootstrapIcon from "../../assets/bootstrap.svg";
import antIcon from "../../assets/ant.svg";
import firebaseIcon from "../../assets/firebase.svg";
import {GithubOutlined} from "@ant-design/icons";
import WOW from "wowjs"
new WOW.WOW().init();
const {Step} = Steps;
function Home() {
    return (
        <div className="home-container">
            <div className="hero-container ">
                <div className="hero-text wow animate__animated animate__fadeInUp   ">
                    <p> Welcome to Chat-App</p>
                    <p>
                        Lets get started with chatapp and connect with your
                        friends through email. <br />
                        This project is developed by Saurabh Burade.
                    </p>
                    <div className="action-btns d-flex mt-3">
                        {isAuth() ? null : (
                            <>
                                <Link to="/login">
                                    {" "}
                                    <Button size="sm p-2 pl-5 pr-5">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button size="sm p-2 ml-5 pl-5 pr-5">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="hero-image-cont wow animate__animated animate__fadeInUp">
                    <img className="hero-image" src={image} alt="" />
                </div>
            </div>
            <div className="steps">
                <h3>Steps</h3>
                <div className="d-flex align-items-center wow animate__animated animate__fadeInUp">
                    <Steps progressDot direction="vertical">
                        <Step
                            status="finish"
                            title="Sign Up"
                            description={
                                <p className="desc">
                                    Sign up in the application by filling up
                                    some details along with your email.
                                </p>
                            }
                        />
                        <Step
                            status="finish"
                            title="Login"
                            description={
                                <p className="desc">
                                    Login through your email and password and
                                    get introduced to chat screen
                                </p>
                            }
                        />
                        <Step
                            status="finish"
                            title="Add friend"
                            description={
                                <p className="desc">
                                    Go to search bar at chat screen and enter
                                    email of your friend.
                                </p>
                            }
                        />
                        <Step
                            status="finish"
                            title="Good to go"
                            description={
                                <p className="desc">
                                    Boom you can chat with your friend 🍻
                                </p>
                            }
                        />
                    </Steps>
                    <div>
                        <img
                            className="chat-screen wow  animate__animated animate__fadeInUp"
                            src={chatimage}
                            alt=""
                        />
                    </div>
                </div>
            </div>{" "}
            <div className="steps tech-cont">
                <h3>Technologies Used</h3>
                <div className="d-flex align-items-center justify-content-center flex-wrap wow  animate__animated animate__fadeInUpwow  animate__animated animate__fadeInUp">
                    <Tooltip placement="bottom" title="ReactJS">
                        <div className="tech-icons-cont wow  animate__animated animate__fadeInUp">
                            <img src={reactIcon} alt="" />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Redux">
                        <div className="tech-icons-cont wow  animate__animated animate__fadeInUp">
                            <img src={reduxIcon} alt="reduxIcon" />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title="NodeJS">
                        <div className="tech-icons-cont wow  animate__animated animate__fadeInUp">
                            <img src={nodeIcon} alt="nodeIcon" />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title="ExpressJS">
                        <div className="tech-icons-cont wow  animate__animated animate__fadeInUp">
                            <img src={expreeIcon} alt="expreeIcon" />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title="MongoDB">
                        <div className="tech-icons-cont wow  animate__animated animate__fadeInUp">
                            <img src={mongoIcon} alt="mongoIcon" />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Firebase">
                        <div className="tech-icons-cont wow  animate__animated animate__fadeInUp">
                            <img src={firebaseIcon} alt="antIcon" />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Bootstrap">
                        <div className="tech-icons-cont wow  animate__animated animate__fadeInUp">
                            <img src={bootstrapIcon} alt="bootstrapIcon" />
                        </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Ant-Design">
                        <div className="tech-icons-cont wow  animate__animated animate__fadeInUp">
                            <img src={antIcon} alt="antIcon" />
                        </div>
                    </Tooltip>
                </div>
            </div>{" "}
            <div className="steps tech-cont ">
                <h3 className="pb-0 wow  animate__animated animate__fadeInUp">
                    About Project
                </h3>
                <p>This Project is developed by Saurabh Burade</p>
                <div className="d-flex align-items-center justify-content-center">
                    <a
                        href="https://github.com/saurabhburade/Chat-App"
                        target="_blank"
                    >
                        <AntButton
                            type="primary"
                            shape="round"
                            icon={<GithubOutlined />}
                            size="large"
                            style={{background: "black"}}
                        >
                            Go to GitHub Project
                        </AntButton>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
