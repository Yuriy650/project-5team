import React from 'react';
<<<<<<< HEAD:src/components/Tabs/Navigation.js
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Charts from "../Charts/Charts";
import Categories from "../Categories/Categories";
import {BrowserRouter, Route} from "react-router-dom";
import "./navigations.css"
=======
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

>>>>>>> c91a0ab96dc7b782c793cba7e69b6e79ced90a6f:src/components/Navigation.js

const Navigation = (props) => {
    return (
        <div className="app-wrapper">
            <img src="https://assets-global.website-files.com/5ae17eb10974c57415c53e4b/5cac03fbe575cf93f4bfb7fd_Singapore%E2%80%99s%20NTUC%20Income%20Continues%20Partnership%20with%20Collective%20Campus%20to%20Identify%20and%20Work%20with%20Startups_1F4E79.png" alt="income"/>
            <Header/>
            <Navbar data={props.data}/>
            <div className="content">
            </div>
        </div>
    );
}
export default Navigation;