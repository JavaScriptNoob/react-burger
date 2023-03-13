import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import AppHeader from '../app-header/app-header'

import Main from "../../pages/main";
import {Routes, Link, Route, NavLink} from "react-router-dom";
import Register from "../../pages/register";
import Login from "../../pages/login";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import Profile from "../../pages/profile";
import PrivateRoute from "../../pages/private-route";
const App = () => {


    return (
        <div className="App">
            <div id="portal">
                <AppHeader/>
                <Routes >
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/profile" element={<PrivateRoute/>}>

                        <Route path="/profile" element={<Profile/>}/>
                    </Route>

                </Routes>
            </div>
        </div>
    );
}
export default App;
