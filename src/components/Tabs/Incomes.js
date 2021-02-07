import React, {Component} from "react";
import {makeStyles, Paper, TableBody, TableContainer, TableHead} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import "./Charges/changes.css"
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import filterIncomesCategory from "../../Redux/actions/filter-incomes-category-action";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";



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
                <h2 className ="title">Incomes</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <ProductHeadRow
                                incomes={this.props.incomes}
                                checkFilterIncomesCategory={this.props.checkFilterIncomesCategory}
                                checkFilterIncomesTotal={this.props.checkFilterIncomesTotal}
                                checkFilterIncomesDate={this.props.checkFilterIncomesDate}
                            />
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
    handleIncomeCategoryOnChange = (e) => {
        console.log(e.target.value);
        const filterCategory = this.props.incomes.filter(item => item.category === e.target.value);
        console.log(filterCategory);
        this.props.checkFilterIncomesCategory(filterCategory);
    }
    handleIncomesDateOnSubmit = (e) => {
        e.preventDefault();
        const begin = e.target[0].value;
        const end = e.target[1].value;
        let beginDate = new Date(begin);
        let endDate = new Date(end);
        let filterDate = this.props.incomes.filter(item => {
            return ((new Date(item.date)).getTime() >= beginDate.getTime()) &&
                ((new Date(item.date)).getTime()<= endDate.getTime())
        })
        this.props.checkFilterIncomesDate(filterDate);
    }
    handleIncomesMoneyOnClick = (e) => {
        if (e.target.value === 'More') {
            let filterTotal = this.props.incomes.sort((a,b)=>{
                return b.total-a.total;
            })
            this.props.checkFilterIncomesTotal(filterTotal);
        } else if (e.target.value === 'Less') {
            let filterTotal = this.props.incomes.sort((a,b)=>{
                return a.total-b.total;
            })
            this.props.checkFilterIncomesTotal(filterTotal);
        }

    }
    getDate = () => {
        return new Date();
    }
    render() {
        return (
            <tr>
                <th align={"center"}><div>Category</div><InputLabel htmlFor="select"/>
                    <NativeSelect onChange={this.handleIncomeCategoryOnChange} id="select">
                        <option value="Category">Select category</option>
                        <option value="Salary">Salary</option>
                        <option value="Rent">Rent</option>
                        <option value="Bonuses">Bonuses</option>
                        <option value="Deposits">Deposits</option>
                        <option value="Profits">Profits</option>
                        <option value="Sale of property">Sale of property</option>
                    </NativeSelect></th>
                <th align={"center"}>Description</th>
                <th align={"center"}><div >Date</div>
                    <form onSubmit={this.handleIncomesDateOnSubmit}>
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
                                   defaultValue={()=> new Date()}
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                        />
                        <button className='dateBtn' type='submit'>Get</button>
                    </form></th>
                <th align={"center"}><div>Total, $</div>
                    <InputLabel htmlFor="select"/>
                    <NativeSelect onChange={this.handleIncomesMoneyOnClick} id="select">
                        <option value="Category">Sort money</option>
                        <option value="More">More</option>
                        <option value="Less">Less</option>
                    </NativeSelect></th>
            </tr>

        )
    }
}

class ProductRow extends React.Component {
    handleChange = (e) => {
        console.log(e.target.value);
    }
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
/*const getStateToProps = (state) => {
    return  {
        incomes: state.filterIncomesCategoryReducer
    }*/


/*const mapDispatchToProps = (dispatch) => {
    return {
        filterIncomesCategory: e => dispatch(filterIncomesCategory(e))
    }

}*/

export default Incomes;
//export default Incomes;