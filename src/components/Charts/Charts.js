import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { category:'Food', money: 19.99 },
    { category: 'Clothes', money: 49.99 },
    { category: 'Restaurants', money: 19.99 },
    { category: 'Fuel', money: 38.99 },
    { category: 'Pets', money: 9.99 },
    { category: 'Utility Bills', money: 129.99 },
];

export default class Charts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data,

        };
        //this.handleDataChange = this.handleDataChange.bind(this);
    }


/*componentDidMount() {
    this.handleDataChange();

}
componentDidUpdate(prevProps, prevState, snapshot) {
    for(let i=0; i<localStorage.length; i++){
        let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
        let _dataCharges = this.state.data;
        if (localStorage.getItem(`${localStorage.key(i)}`)!==null &&
            this.state.chargesCategories.includes(newRow.category.toLowerCase())) {
            _dataCharges.push(newRow);
            this.setState({data: _dataCharges});
        }
        }
    }

    handleDataChange() {
    for(let i=0; i<localStorage.length; i++){
        let newRow = JSON.parse(localStorage.getItem(`${localStorage.key(i)}`));
        console.log(newRow);
        let _dataCharges = this.state.data;
        if(this.state.chargesCategories.includes(newRow.category.toLowerCase())){
            _dataCharges.push(newRow);
            this.setState({data: _dataCharges});
        }
    }
}*/
    render() {

        const { data: chartData } = this.state;

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
