import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import {Animation} from '@devexpress/dx-react-chart';
import {Component} from "react";

const dataIncomes = [
    {id: 1, category: 'Salary', description: 'For a good job', date: '26.01.2021', total: 1500},
    {id: 2, category: 'Rent', description: 'Rent apartment', date: '27.01.2021', total: 600},
    {id: 3, category: 'Deposits', description: 'Rent apartment', date: '11.01.2021', total: 800},
    {id: 4, category: 'Bonuses', description: 'Rent apartment', date: '15.01.2021', total: 400},
    {id: 5, category: 'Profits', description: 'Rent apartment', date: '21.01.2021', total: 500}
]

export default class ChartsOfIncomes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIncomes
        };
    }
    /*changeState() {
        this.setState({dataIncomes: this.props.dataIncomes} )
    }
    componentDidMount() {
        this.changeState();
    }*/
    render() {

        const {dataIncomes: chartData} = this.state;
        return (
            <Paper>
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis/>
                    <ValueAxis max={7}/>

                    <BarSeries
                        valueField="total"
                        argumentField="category"
                    />
                    <Title text="All incomes for the month"/>
                    <Animation/>
                </Chart>
            </Paper>
        );
    }

}
