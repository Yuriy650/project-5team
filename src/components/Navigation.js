import React from 'react';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Charts from "./Charts/Charts";
import Categories from "./Categories/Categories";
import {BrowserRouter, Route} from "react-router-dom";


const Navigation = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                {/*<Route path='/home' component={Home} />
                <Route path='/charts' component={Charts} />*/}
                {/*<Route path='/categories' component={Categories} />*/}
            </div>
        </div>
    );
}
export default Navigation;