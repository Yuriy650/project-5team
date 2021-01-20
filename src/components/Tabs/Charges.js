import React, {Component} from 'react';





class Charges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{category: 'Food', description: 'ashan', date: '21.01.2021', money: '$19.99'},
                {category: 'Clothes', description: 'forum', date: '18.01.2021', money: '$49.99'},
                {category: 'Restaurants', description: 'kryivka', date: '18.01.2021', money: '$19.99'},
                {category: 'Fuel', description: 'okko', date: '18.01.2021', money: '$18.99'},
                {category: 'Pets', description: ')))', date: '18.01.2021', money: '$9.99'},
                {category: 'Utility bills', description: 'big bills((', date: '18.01.2021', money: '$149.99'}
            ]

        }
    }
    render() {
        return (
            <div>
                <h1>Charges</h1>
                <table>
                    <thead>
                    <ProductHeadRow />
                    </thead>
                    <tbody>
                    {this.state.products.map(item => {
                        return <ProductRow category={item.category} description={item.description}
                                           date={item.date} money={item.money}/>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

class ProductHeadRow extends React.Component {
    render() {
        return (
            <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Date</th>
                <th>Money</th>
            </tr>

        )
    }
}

class ProductRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.category}</td>
                <td>{this.props.description}</td>
                <td>{this.props.date}</td>
                <td>{this.props.money}</td>

            </tr>
        )
    }

}


export default Charges;