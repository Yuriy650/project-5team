import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent";
import AddNewCategory from "./components/Dialogs/AddNewCategory";
import AddNewCharge from "./components/Dialogs/AddNewCharge";
import AddNewIncome from "./components/Dialogs/AddNewIncome";
import {BrowserRouter} from "react-router-dom";
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import PetsIcon from '@material-ui/icons/Pets';
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from "@material-ui/core/Grid";
import Charts from "./components/Charts/Charts";

const chargesIcons = {margin: '5px 5px 5px 20px'}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    category: 'Food',
                    description: 'ashan', date: '11.01.2021', money: '19.99'
                },
                {
                    id: 2,
                    category: 'Clothes',
                    description: 'forum', date: '15.01.2021', money: '49.99'
                },
                {
                    id: 3,
                    category: 'Restaurants',
                    description: 'kryivka', date: '26.01.2021', money: '29.99'
                },
                {
                    id: 4,
                    category: 'Fuel',
                    description: 'okko', date: '27.01.2021', money: '38.99'
                },
                {
                    id: 5,
                    category: 'Pets',
                    description: ')))', date: '29.01.2021', money: '9.99'
                },
                {
                    id: 6,
                    category: 'Utility Bills',
                    description: 'big bills((', date: '31.01.2021', money: '59.99'
                },
                {
                    category: 'Utility Bills',
                    description: 'big bills((', date: '31.01.2021', money: '29.99'
                }
            ],
            incomes: [
                {id: 1, category: 'Salary', description: 'For a good job', date: '26.01.2021', total: 500},
                {id: 2, category: 'Rent', description: 'Rent apartment', date: '27.01.2021', total: 600},
                {id: 3, category: 'Profit', description: 'Rent apartment', date: '27.01.2021', total: 200}

            ],
            chargesCategories: ['Food', 'Clothes', 'Restaurants', 'Fuel', 'Pets', 'Utility bills'],
            incomesCategories: ['Salary', 'Rent', 'Bonuses', 'Deposits', 'Profits', 'Sale of property']
        }
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.handleChange();
        this.changeState();
    }

    handleChange() {
        let _products = [...this.state.products];
        this.setState({products: _products});
        let _incomes = [...this.state.incomes];
        this.setState({incomes: _incomes});
    }

    changeState = () => {
        for (let i = 0; i < localStorage.length; i++) {
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));

            console.log(newRow);
            let _incomes = this.state.incomes;
            let _products = this.state.products;
            if (this.state.chargesCategories.includes(newRow.category)) {

                _products.push(newRow);
                _products.forEach(item => console.log(item.id));
                this.setState({products: _products});

            } else if (this.state.incomesCategories.includes(newRow.category) && newRow) {
                _incomes.push(newRow);
                this.setState({incomes: _incomes});
            }
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
                        <div className="bnt-tabs">
                            <TabsContent
                                products={this.state.products}
                                handleChange={this.handleChange}
                                incomes={this.state.incomes}
                                data={this.state.products}
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
