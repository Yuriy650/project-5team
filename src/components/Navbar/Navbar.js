import React from 'react';
import {NavLink} from "react-router-dom";
import "./navbar.css"
function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar-wrapper">
            <div><NavLink to="/home">Home</NavLink></div>
            <div><NavLink to="/charts">Charts</NavLink></div>
            <div><NavLink to="/categories">Categories</NavLink></div>
            </div>
           
           
        </nav>
    )
}

export default Navbar;
