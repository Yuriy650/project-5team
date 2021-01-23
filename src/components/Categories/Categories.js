import React, {Component} from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableBody} from "@material-ui/core";

class Categories extends Component {
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
                <h1>Categories</h1>
                <Table>
                    <TableHead >
                    <ProductHeadRow />
                    </TableHead>
                    <TableBody>
                    {this.state.products.map(item => {
                        return <ProductRow category={item.category} description={item.description}
                                           date={item.date} money={item.money}/>
                    })}
                    </TableBody>
                </Table>
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
            </tr>

        )
    }
}

class ProductRow extends React.Component {
    render() {
        return (
            <tr>
                <td align={"center"} height={50} width={150}>{this.props.category}</td>
                <td align={"center"} height={50} width={150}>{this.props.description}</td>
                <td align={"center"} height={50} width={150}>{this.props.date}</td>

            </tr>
        )
    }

}

export default Categories;