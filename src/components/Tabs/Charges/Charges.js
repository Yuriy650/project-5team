import React, {Component} from 'react';
import Table from "@material-ui/core/Table";
import {makeStyles, Paper, TableBody, TableContainer, TableHead} from "@material-ui/core";
import "../Charges/changes.css";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";


class Charges extends Component {
    useStyles = makeStyles(theme => ({
        table: {
            minWidth: 350,
        },
    }));

    render() {
        const classes = this.props;
        return (
            <div>
                <h2 className="title">Charges</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <ProductHeadRow products={this.props.products}
                                            checkFilterProducts={this.props.checkFilterProducts}
                                            checkFilterTotal={this.props.checkFilterTotal}
                                            checkFilterDate={this.props.checkFilterDate}
                            />
                        </TableHead>
                        <TableBody>
                            {this.props.products.map((item, i) => {
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
    handleOnChange = (e) => {
        const filterProducts = this.props.products.filter(item => item.category === e.target.value);
        this.props.checkFilterProducts(filterProducts);
    }
    handleMoneyOnClick = (e) => {
        if (e.target.value === 'More') {
            let filterTotal = this.props.products.sort((a,b)=>{
                return b.total-a.total;
            })
            this.props.checkFilterTotal(filterTotal);
        } else if (e.target.value === 'Less') {
            let filterTotal = this.props.products.sort((a,b)=>{
                return a.total-b.total;
            })
            this.props.checkFilterTotal(filterTotal);
        }

    }
    handleDateOnSubmit = (e) => {
        e.preventDefault();
        const begin = e.target[0].value;
        const end = e.target[1].value;
        let beginDate = new Date(begin);
        let endDate = new Date(end);
        let filterDate = this.props.products.filter(item => {
            return ((new Date(item.date)).getTime() >= beginDate.getTime()) &&
            ((new Date(item.date)).getTime()<= endDate.getTime())
        })
        this.props.checkFilterDate(filterDate);
    }

    render() {
        return (
            <tr>
                <th className='chargesMenuCategory' align='center'>
                    <div>Category</div>
                    <InputLabel htmlFor="select"/>
                    <NativeSelect onChange={this.handleOnChange} id="select">
                        <option value="Category">Select category</option>
                        <option value="Food">Food</option>
                        <option value="Restaurants">Restaurant</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Fuel">Fuel</option>
                        <option value="Pets">Pets</option>
                        <option value="Utility bills">Utility bills</option>
                    </NativeSelect>
                </th>
                <th className='chargesMenuDescription' align='center'>
                    <div>Description</div>
                </th>
                <th className='chargesMenuDate'  align='center'>
                    <div >Date</div>
                    <form onSubmit={this.handleDateOnSubmit}>
                    <TextField className='date-textField'
                        id="date"
                        label="Begin"
                        type="date"
                        defaultValue="2021-01-11"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                        <TextField className='date-textField'
                            id="date"
                            label="End"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <button className='dateBtn' type='submit'>Get</button>
                    </form>
                </th>
                <th className='chargesMenuTotal' align='center'>
                    <div>Total, $</div>
                    <InputLabel htmlFor="select"/>
                    <NativeSelect onChange={this.handleMoneyOnClick} id="select">
                        <option value="Category">Sort money</option>
                        <option value="More">More</option>
                        <option value="Less">Less</option>
                    </NativeSelect></th>
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

export default Charges;

