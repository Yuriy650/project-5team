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
                    category: <Grid align={'left'}><RestaurantMenuRoundedIcon color={"primary"}/>Food</Grid>,
                    description: 'ashan', date: '21.01.2021', money: '$19.99'
                },
                {
                    category: <Grid align={'left'}><ShoppingBasketIcon color={"primary"}/>Clothes</Grid>,
                    description: 'forum', date: '18.01.2021', money: '$49.99'
                },
                {
                    category: <Grid align={'left'}><LocalCafeIcon color={"primary"}/>Restaurants</Grid>,
                    description: 'kryivka', date: '18.01.2021', money: '$29.99'
                },
                {
                    category: <Grid align={'left'}><LocalGasStationIcon color={"primary"}/>Fuel</Grid>,
                    description: 'okko', date: '18.01.2021', money: '$38.99'
                },
                {
                    category: <Grid align={'left'}><PetsIcon color={"primary"}/>Pets</Grid>,
                    description: ')))', date: '18.01.2021', money: '$9.99'
                },
                {
                    category: <Grid align={'left'}><DescriptionIcon color={"primary"}/>Utility Bills</Grid>,
                    description: 'big bills((', date: '18.01.2021', money: '$129.99'
                }
            ],
            incomes: [
                {id: 1, category: 'Salary', description: 'For a good job', date: '26.01.2021', total: 1500},
                {id: 2, category: 'Rent', description: 'Rent apartment', date: '27.01.2021', total: 600}
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
        for (let i = 0; i < localStorage.length; i++) {
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            console.log(newRow);
            let _products = this.state.products;
            let _incomes = this.state.incomes;
            if (this.state.chargesCategories.includes(newRow.category.toLowerCase())) {
                _products.push(newRow);
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
                            <Charts data={this.state.products}
                                    dataIncomes={this.state.incomes}/>
                        </div>

                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
