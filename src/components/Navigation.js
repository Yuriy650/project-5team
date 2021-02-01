import React from 'react';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";


const Navigation = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar data={props.data}/>
            <div className="content">
            </div>
        </div>
    );
}
export default Navigation;