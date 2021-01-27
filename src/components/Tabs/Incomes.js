import React, {Component} from "react";
import {makeStyles, Paper, TableBody, TableContainer, TableHead} from "@material-ui/core";
import Table from "@material-ui/core/Table";

class Incomes extends Component {
    useStyles = makeStyles(theme => ({
        table: {
            minWidth: 350,
        },
    }))
    render() {
        const classes = this.props;
        return (
            <div>
                <h1>Incomes</h1>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <ProductHeadRow/>
                        </TableHead>
                        <TableBody>
                            {this.props.incomes.map((item, i) => {
                                return <ProductRow category={item.category} description={item.description}
                                                   date={item.date} total={item.total} key={i}/>
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
                <th align={"center"}>Total</th>
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
                <td align={"center"} height={50} width={150}>{this.props.total}</td>

            </tr>
        )
    }

}

export default Incomes;
