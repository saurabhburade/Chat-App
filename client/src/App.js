import React from "react";
import Header from "./Components/Header/Header";
import Chat from "./Components/Chat/Chat";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import {isAuth} from "./utils/auth";
import {connect} from "react-redux";
import {fetchUser} from "./Redux/Chat/chat.actionCreators";
function App(props) {
    if (isAuth()) {
        props.fetchUser();
    }
    return (
        <Router>
            <Header />
            {/* <Chat /> */}
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={SignUp} />
                <Route path="/chat" exact component={Chat} />
            </Switch>
        </Router>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatchToProps)(App);
