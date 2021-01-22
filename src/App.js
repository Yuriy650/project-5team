import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent";
import AddNewCategory from "./components/Dialogs/AddNewCategory";
import AddNewCharge from "./components/Dialogs/AddNewCharge";
import AddNewIncome from "./components/Dialogs/AddNewIncome";
import {BrowserRouter} from "react-router-dom";
/*import Categories from "./components/Categories/Categories";
import Home from "./components/Home/Home";
import Charts from "./components/Charts/Charts";
import Charges from "./components/Tabs/Charges";*/

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
        //this.handleProductsChange = this.handleProductsChange.bind(this);
        this.handleCategoryOnClick = this.handleCategoryOnClick.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleMoneyChange = this.handleMoneyChange.bind(this);
    }

    handleCategoryOnClick(e) {
       this.setState({products: this.state.products.push(e)});
    }

    handleDescriptionChange(e) {
        return e;
    }

    handleDateChange(e) {
        return  e;
    }

    handleMoneyChange(e) {
        return  e;
    }


    /*handleProductsChange(e) {
        this.setState({
            products: [...this.state.products, this.state.products.push({category: this.handleCategoryOnClick(e),
            description: this.handleDescriptionChange(e),
            date: this.handleDateChange(e),
            money: this.handleMoneyChange(e)})]

        });
    }*/

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
                                onCategoryOnClick={this.handleCategoryOnClick}
                                onDescriptionChange={this.handleDescriptionChange}
                                onDateChange={this.handleDateChange}
                                onMoneyChange={this.handleMoneyChange}
                            />
                            <AddNewIncome/>
                        </div>

                        <div className="bnt-tabs">
                            <TabsContent products={this.state.products}/>


                        </div>

                    </div>

                </div>
            </BrowserRouter>

        )
    }


}

export default App;
