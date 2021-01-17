import React from 'react';
import {NavLink} from "react-router-dom";


function Navbar(props) {
    return (
        <nav className='navbar'>
            <div className='nav'><NavLink to="/home" >Home</NavLink></div>
            <div className='nav'><NavLink to="/charts">Charts</NavLink></div>
            <div className='nav'><NavLink to="/categories">Categories</NavLink></div>
        </nav>
    )
}

export default Navbar;