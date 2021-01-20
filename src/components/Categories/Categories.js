import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
            <div>
                <h1>Categories</h1>
            </div>

            </BrowserRouter>
        )
    }

}
export default Categories;