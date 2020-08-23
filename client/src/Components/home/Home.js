import React from "react";
import image from "../../assets/chat1.svg";
import chatimage from "../../assets/chat1.JPG";
import "./home.css";
import {Button} from "react-bootstrap";
import {Steps} from "antd";
import { Link } from 'react-router-dom';
import { isAuth } from './../../utils/auth';

const {Step} = Steps;
function Home() {
    return (
        <div className="home-container">
            <div className="hero-container ">
                <div className="hero-text">
                    <p> Welcome to Chat-App</p>
                    <p>
                        Lets get started with chatapp and connect with your
                        friends through email. <br />
                        This project is developed by Saurabh Burade.
                    </p>
                    <div className="action-btns d-flex mt-3">
                        {isAuth()?null:<>
                        
                        <Link to="/login">
                            {" "}
                            <Button size="sm p-2 pl-5 pr-5">Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button size="sm p-2 ml-5 pl-5 pr-5">
                                Sign Up
                            </Button>
                        </Link>
                        </>}
                    </div>
                </div>
                <div className="hero-image-cont">
                    <img className="hero-image" src={image} alt="" />
                </div>
            </div>
            <div className="steps">
                <h3>Steps</h3>
                <div className="d-flex align-items-center">
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
                        {/* <Step
                        status="finish"
                        title="Waiting"
                        description="This is a description."
                    /> */}
                    </Steps>
                    <div>
                        <img className="chat-screen" src={chatimage} alt="" />
                    </div>
                </div>
            </div>
            {/* <h1>Hello</h1>
            <img className="hero-image" src={image} alt="" /> */}
        </div>
    );
}

export default Home;
