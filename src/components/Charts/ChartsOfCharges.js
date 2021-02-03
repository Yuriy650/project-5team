import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import {Chart, PieSeries, Title,} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';
export default class ChartsOfCharges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chargesCategories: ['Food', 'Clothes', 'Restaurants', 'Fuel', 'Pets', 'Utility bills']
        };
        this.takeDataCharges=this.takeDataCharges.bind(this);
    }
    takeDataCharges = () => {

        let dataCharges = [];
        for (let i = 0; i < localStorage.length; i++) {
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            console.log(newRow);
            if (this.state.chargesCategories.includes(newRow.category)) {
                dataCharges.push(newRow);
            }
        }
        return dataCharges;
    }
    render() {
        const chartData = this.takeDataCharges();
        return (
            <Paper>
                <Chart
                    data={chartData}
                >
                    <PieSeries
                        valueField="money"
                        argumentField="category"
                        innerRadius={0.6}
                    />
                    <Title
                        text="All charges for the month"
                    />
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}
