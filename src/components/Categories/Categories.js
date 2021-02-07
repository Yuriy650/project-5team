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
 import "./categories.css";
import addCategory from "../../Redux/actions/add-category-action";
import {connect} from "react-redux";




class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {category:<Grid align={'center'}><RestaurantMenuRoundedIcon color={"primary"}/>Food </Grid>,
                    description: 'ashan', date: '21.01.2021'},
                {category:<Grid align={'center'}><ShoppingBasketIcon color={"primary"}/> Clothes </Grid>,
                    description: 'forum', date: '18.01.2021'},
                {category:<Grid align={'center'}><LocalCafeIcon color={"primary"}/>Restaurants</Grid>,
                    description: 'kryivka', date: '18.01.2021'},
                {category:<Grid align={'center'}><LocalGasStationIcon color={"primary"}/>Fuel</Grid>,
                    description: 'okko', date: '18.01.2021'},
                {category:<Grid align={'center'}><PetsIcon color={"primary"}/>Pets</Grid>,
                    description: ')))', date: '18.01.2021'},
                {category:<Grid align={'center'}><DescriptionIcon color={"primary"}/>Utility Bills</Grid>,
                    description: 'big bills((', date: '18.01.2021'}
            ]

        }

    }

    render() {
        return (
            <div>
                <h1>Categories</h1>
                <Table >
                    <TableHead >
                    <CategoriesHeadRow />
                    </TableHead>
                    <TableBody className="center">
                    {this.props.state.categories.map(item => {
                        return <CategoriesRow category={item.category} description={item.description}
                                           date={item.date} />
                    })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

class CategoriesHeadRow extends React.Component {
    render() {
        return (
            <tr className="header_tr">
                <th>Category</th>
                <th>Description</th>
                <th>Date</th>
            </tr>

        )
    }
}

class CategoriesRow extends React.Component {
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
const mapStateToProps = (state) => {
    return {

        state: state.categories
    };
};
export default connect(mapStateToProps, {addCategory})(Categories)
