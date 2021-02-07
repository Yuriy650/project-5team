import React from 'react';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";


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