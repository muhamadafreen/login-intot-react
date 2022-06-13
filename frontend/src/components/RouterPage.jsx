import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Signup from "./SignUp";
import LoggedUsers from "./LoggedUsers";

 function RouterPage(){
    return (
        <div>
            <Router>
                <Routes>
                <Route exact path="/" element={<App/>}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/loggedusers" element={<LoggedUsers />} />

                </Routes>
            </Router>
        </div>
    )
}

export default RouterPage;