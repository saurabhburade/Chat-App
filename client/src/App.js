import React from "react";
import Header from "./Components/Header/Header";
import Chat from "./Components/Chat/Chat";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import {isAuth} from "./Utils/auth";
import {connect} from "react-redux";
import {fetchUser} from "./Redux/Chat/chat.actionCreators";
import Home from "./Components/home/Home";
import "./App.css";
function App(props) {
    if (isAuth()) {
        props.fetchUser();
    }
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/" exact component={Home} />
                    <Route path="/register" exact component={SignUp} />
                    <Route path="/chat" exact component={Chat} />
                </Switch>
            </div>
        </Router>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatchToProps)(App);
