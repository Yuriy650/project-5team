import React from 'react';
import {NavLink} from "react-router-dom";



// import Home from "../Home/Home";
// import Charts from "../Charts/Charts";
// import Categories from "../Categories/Categories";


function Navbar(props) {
    return (
        <nav className='navbar'>

            <div className='nav'><NavLink to="/home" >Home</NavLink></div>
            <div className='nav'><NavLink to="/charts">Charts</NavLink></div>
            <div className='nav'><NavLink to="/categories">Categories</NavLink></div>
            <div className='navbar-wrapper'>
            <div><NavLink to="/home">Home</NavLink></div>
            <div><NavLink to="/charts">Charts</NavLink></div>
            <div><NavLink to="/categories">Categories</NavLink></div>
            </div>
           

        </nav>
    )
}

export default Navbar;
