import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent";
import AddNewCategory from "./components/Dialogs/AddNewCategory";
import AddNewCharge from "./components/Dialogs/AddNewCharge";
import AddNewIncome from "./components/Dialogs/AddNewIncome";
import {BrowserRouter} from "react-router-dom";
import Charts from "./components/Charts/Charts";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    category: 'Food',
                    description: 'ashan', date: '11.01.2021', total: '19.99'
                },
                {
                    id: 2,
                    category: 'Clothes',
                    description: 'forum', date: '15.01.2021', total: '49.99'
                },
                {
                    id: 3,
                    category: 'Restaurants',
                    description: 'kryivka', date: '26.01.2021', total: '29.99'
                },
                {
                    id: 4,
                    category: 'Fuel',
                    description: 'okko', date: '27.01.2021', total: '38.99'
                },
                {
                    id: 5,
                    category: 'Pets',
                    description: ')))', date: '29.01.2021', total: '9.99'
                },
                {
                    id: 6,
                    category: 'Utility Bills',
                    description: 'big bills((', date: '31.01.2021', total: '59.99'
                },
                {
                    category: 'Utility Bills',
                    description: 'big bills((', date: '31.01.2021', total: '29.99'
                }
            ],
            incomes: [
                {id: 1, category: 'Salary', description: 'For a good job', date: '26.01.2021', total: 500},
                {id: 2, category: 'Rent', description: 'Rent apartment', date: '27.01.2021', total: 600},
                {id: 3, category: 'Profits', description: 'Rent apartment', date: '27.01.2021', total: 200}
            ],
            chargesCategories: ['Food', 'Clothes', 'Restaurants', 'Fuel', 'Pets', 'Utility bills'],
            incomesCategories: ['Salary', 'Rent', 'Bonuses', 'Deposits', 'Profits', 'Sale of property']
        }
        this.handleChange = this.handleChange.bind(this);
        this.checkFilterProducts=this.checkFilterProducts.bind(this);
        this.checkFilterTotal=this.checkFilterTotal.bind(this);
    }

    componentDidMount() {
        this.handleChange();
        this.changeState();
        this.findBalance();
        this.checkFilterProducts();
        this.checkFilterTotal();
    }

    handleChange() {
        let _products = [...this.state.products];
        this.setState({products: _products});
        let _incomes = [...this.state.incomes];
        this.setState({incomes: _incomes});
    }

    changeState() {
        for (let i = 0; i < localStorage.length; i++) {
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            let _incomes = this.state.incomes;
            let _products = this.state.products;
            if (this.state.chargesCategories.includes(newRow.category)) {
                _products.push(newRow);
                //_products.forEach(item => console.log(item.id));
                this.setState({products: _products});
            } else if (this.state.incomesCategories.includes(newRow.category) && newRow) {
                _incomes.push(newRow);
                this.setState({incomes: _incomes});
            }
        }
    }

    findBalance() {
        let balance;
        let totalIncomes = 0;
        let totalCharges = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            if (this.state.chargesCategories.includes(newRow.category)) {
                totalCharges += +newRow.total;
            } else {
                totalIncomes += +newRow.total;
            }
        }
        balance = totalIncomes - totalCharges;
        if (balance > 0 && balance <= 300) {
            return `Stop spending! ${balance}`;
        } else if (balance > 300 && balance <= 500) {
            return `Attention! You have very little money:${balance}`
        } else if (balance <= 0) {
            return `Ooops! You are bankrupt! ${balance}`;
        } else {
            return balance;
        }
    }
    checkFilterProducts(filterProducts) {
        if (filterProducts) {
            this.setState({...this.state, products: filterProducts});
        }
    }
    checkFilterTotal(filterTotal) {
        if(filterTotal) {
            this.setState({...this.state, products: filterTotal})
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
                                handleOnSubmit={this.handleChange}
                            />
                            <AddNewIncome
                                incomes={this.state.incomes}
                                handleIncomeOnSubmit={this.handleChange}/>
                        </div>
                        <div className='balance'>BALANCE: {this.findBalance()}$</div>
                        <div className="bnt-tabs">
                            <TabsContent
                                products={this.state.products}
                                handleChange={this.handleChange}
                                incomes={this.state.incomes}
                                data={this.state.products}
                                checkFilterProducts={this.checkFilterProducts}
                                checkFilterTotal={this.checkFilterTotal}
                            />
                            <Charts dataCharges={this.state.products}
                                    dataIncomes={this.state.incomes}
                                    changeChart={this.handleChange}
                                    chargesCategories={this.state.chargesCategories}
                                    changeState={this.changeState}
                                    incomesCategories={this.state.incomesCategories}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
