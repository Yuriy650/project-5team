import React, {Component} from 'react';
import Table from "@material-ui/core/Table";
import {Paper, TableBody, TableContainer, TableHead} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

class Charges extends Component {
    useStyles = makeStyles(theme => ({
        table: {
            minWidth: 350,
        },
    }))
    render() {
        const classes = this.props;
        return (
            <div>
                <h1>Charges</h1>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <ProductHeadRow/>
                        </TableHead>
                        <TableBody>
                            {this.props.products.map((item, i) => {
                                return <ProductRow category={item.category} description={item.description}
                                                   date={item.date} money={item.money} key={i}/>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

class ProductHeadRow extends React.Component {
    render() {
        return (
            <tr>
                <th align={"center"}>Category</th>
                <th align={"center"}>Description</th>
                <th align={"center"}>Date</th>
                <th align={"center"}>Money</th>
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
                <td align={"center"} height={50} width={150}>{this.props.money}</td>

            </tr>
        )
    }

}

export default Charges;