import React, {Component} from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableBody} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import RestaurantMenuRoundedIcon from "@material-ui/icons/RestaurantMenuRounded";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import PetsIcon from "@material-ui/icons/Pets";
import DescriptionIcon from "@material-ui/icons/Description";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {category:<Grid align={'left'}><RestaurantMenuRoundedIcon color={"primary"}/> Food </Grid>,
                    description: 'ashan', date: '21.01.2021'},
                {category:<Grid align={'left'}><ShoppingBasketIcon color={"primary"}/> Clothes </Grid>,
                    description: 'forum', date: '18.01.2021'},
                {category:<Grid align={'left'}><LocalCafeIcon color={"primary"}/>Restaurants</Grid>,
                    description: 'kryivka', date: '18.01.2021'},
                {category:<Grid align={'left'}><LocalGasStationIcon color={"primary"}/>Fuel</Grid>,
                    description: 'okko', date: '18.01.2021'},
                {category:<Grid align={'left'}><PetsIcon color={"primary"}/>Pets</Grid>,
                    description: ')))', date: '18.01.2021'},
                {category:<Grid align={'left'}><DescriptionIcon color={"primary"}/>Utility Bills</Grid>,
                    description: 'big bills((', date: '18.01.2021'}
            ]

        }
    }
    render() {
        return (
            <div>
                <h1>Categories</h1>
                <Table color>
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