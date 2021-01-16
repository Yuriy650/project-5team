import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from "./components/Home/Home";
import Charts from "./components/Charts/Charts";
import Categories from "./components/Categories/Categories";
import {BrowserRouter, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="content">
              <Route path='/home' component={Home} />
              <Route path='/charts' component={Charts} />
              <Route path='/categories' component={Categories} />
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
