import React, {Component} from "react";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

const data = [
    ["Date", "Charges", "Incomes"],
    ["11.01.2021", 19.99, 50],
    ["15.01.2021", 49.99, 0],
    ["26.01.2021", 29.99, 200],
    ["27.01.2021", 38.99, 500],
    ["29.01.2021", 9.99, 150],
    ["31.01.2021", 129.99, 0]
];
const options = {
    title: "Income-Charges",
    curveType: "function",
    legend: { position: "bottom" }
};
export default class ChartsIncomeCharges extends Component {

    render() {
        return (
            <div className="App">
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
        );
    }
}