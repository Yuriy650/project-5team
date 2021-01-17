import React from 'react';
import {NavLink} from "react-router-dom";
import Home from "../Home/Home";
import Charts from "../Charts/Charts";
import Categories from "../Categories/Categories";

function Navbar(props) {
    return (
        <nav className='navbar'>
            <div className='navbar-wrapper'>
            <div><NavLink to="/home">Home</NavLink></div>
            <div><NavLink to="/charts">Charts</NavLink></div>
            <div><NavLink to="/categories">Categories</NavLink></div>
            </div>
           
        </nav>
    )
}

export default Navbar;
