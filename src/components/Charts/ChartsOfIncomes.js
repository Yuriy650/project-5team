import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import {Chart, PieSeries, Title,} from '@devexpress/dx-react-chart-material-ui';

import {Animation} from '@devexpress/dx-react-chart';

export default class ChartsOfIncomes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomesCategories: ['Salary', 'Rent', 'Bonuses', 'Deposits', 'Profits', 'Sale of property']
        };
    }
    takeDataIncomes = () => {
        let dataIncomes = [];
        for (let i = 0; i < localStorage.length; i++) {
            let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
            if (this.state.incomesCategories.includes(newRow.category)) {
                dataIncomes.push(newRow);

            }
        }
        return dataIncomes;
    }
    render() {

        const chartData = this.takeDataIncomes();
        return (
            <Paper>
                <Chart
                    data={chartData}
                >
                    <PieSeries
                        valueField="total"
                        argumentField="category"
                        innerRadius={0.6}
                    />
                    <Title
                        text="All incomes for the month"
                    />
                    <Animation />
                </Chart>
            </Paper>
        );

    }
}
