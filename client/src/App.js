import React from "react";
import Header from "./Components/Header/Header";
import Chat from "./Components/Chat/Chat";
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
function App() {
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

export default App;
