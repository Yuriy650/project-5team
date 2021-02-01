import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent";
import AddNewCategory from "./components/Dialogs/AddNewCategory";
import AddNewCharge from "./components/Dialogs/AddNewCharge";
import AddNewIncome from "./components/Dialogs/AddNewIncome";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{category: 'Food', description: 'ashan', date: '21.01.2021', money: '$19.99'},
                {category: 'Clothes', description: 'forum', date: '18.01.2021', money: '$49.99'},
                {category: 'Restaurants', description: 'kryivka', date: '18.01.2021', money: '$19.99'},
                {category: 'Fuel', description: 'okko', date: '18.01.2021', money: '$18.99'},
                {category: 'Pets', description: ')))', date: '18.01.2021', money: '$9.99'},
                {category: 'Utility bills', description: 'big bills((', date: '18.01.2021', money: '$149.99'}
            ]

        }

        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.handleChange();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    handleChange() {
        for(let i=0; i<localStorage.length; i++){
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            let _products = this.state.products;
            _products.push(newRow);
            this.setState({products: _products});
        }


    }
    render() {

        return (
            <BrowserRouter>
                <div className="main-page">
                    <div className="main-wrapper">
                        <Navigation/>
                    </div>
                    <div className="main-btn">
                        <div className="bnt-add">
                            <AddNewCategory/>
                            <AddNewCharge
                                products={this.state.products}
                                onhandleChange={this.state.handleChange}
                            />
                            <AddNewIncome/>
                        </div>
                        <div className="bnt-tabs">
                            <TabsContent
                                products={this.state.products}
                                handleChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
