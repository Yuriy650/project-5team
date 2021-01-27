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
            products: [
                {category: 'Food', description: 'ashan', date: '21.01.2021', money: '$19.99'},
                {category: 'Clothes', description: 'forum', date: '18.01.2021', money: '$49.99'},
                {category: 'Restaurants', description: 'kryivka', date: '18.01.2021', money: '$19.99'},
                {category: 'Fuel', description: 'okko', date: '18.01.2021', money: '$18.99'},
                {category: 'Pets', description: ')))', date: '18.01.2021', money: '$9.99'},
                {category: 'Utility bills', description: 'big bills((', date: '18.01.2021', money: '$149.99'}
            ],
            incomes: [
                {category: 'Salary', description: 'For a good job', date: '26.01.2021', total: '$1500'},
                {category: 'Rent', description: 'Rent apartment', date: '27.01.2021', total: '$600'}
            ],
            chargesCategories: ['food', 'clothes', 'restaurants', 'fuel', 'pets', 'utility bills'],
            incomesCategories: ['Salary', 'Rent', 'Bonuses', 'Deposits', 'Profits', 'Sale of property']
        }
        this.handleChange = this.handleChange.bind(this);
        //this.handleIncomeChange = this.handleIncomeChange(this);
    }
    componentDidMount() {
        this.handleChange();
        //this.handleIncomeChange()
    }

    handleChange() {
        for(let i=0; i<localStorage.length; i++){
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            console.log(newRow);
            let _products = this.state.products;
            let _incomes = this.state.incomes;
            if(this.state.chargesCategories.includes(newRow.category.toLowerCase())){
                _products.push(newRow);
                this.setState({products: _products});
            } else if (this.state.incomesCategories.includes(newRow.category) && newRow) {
                _incomes.push(newRow);
                this.setState({incomes: _incomes});
            }
        }
    }
    /*handleIncomeChange() {
        for(let i=0; i<localStorage.length; i++){
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            let _incomes = this.state.incomes;
            if(this.state.incomesCategories.includes(newRow.category)){
                _incomes.push(newRow);
                this.setState({incomes: _incomes});
            }
        }
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
                                products={this.state.products}
                                handleOnSubmit={this.handleChange}
                            />
                            <AddNewIncome
                                incomes={this.state.incomes}
                                handleIncomeOnSubmit={this.handleChange}/>
                        </div>
                        <div className="bnt-tabs">
                            <TabsContent
                                products={this.state.products}
                                handleChange={this.handleChange}
                                incomes={this.state.incomes}
                            />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;
