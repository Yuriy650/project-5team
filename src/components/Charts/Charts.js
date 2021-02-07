import React, {Component} from 'react';
import ChartsOfCharges from "./ChartsOfCharges";
import ChartsOfIncomes from "./ChartsOfIncomes";
import ChartsIncomeCharges from "./ChartsIncomeCharges";

export default class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ChartsOfCharges dataCharges={this.props.dataCharges}
                                 changeChart={this.props.changeChart}
                                 chargesCategories={this.props.chargesCategories}
                />
                <ChartsOfIncomes dataIncomes={this.props.dataIncomes}
                                 changeIncomesChart={this.props.changeChart}
                                 changeState={this.props.changeState}
                                 incomesCategories={this.props.incomesCategories}/>
                <ChartsIncomeCharges                    />
            </div>

        );
    }
}
