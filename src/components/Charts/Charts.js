import React, {Component} from 'react';
import ChartsOfCharges from "./ChartesOfCharges";
import ChartsOfIncomes from "./ChartsOfIncomes";
export default class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <ChartsOfCharges />
                <ChartsOfIncomes dataIncomes={this.props.dataIncomes}/>
            </div>

        );
    }
}
