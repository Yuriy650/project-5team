import React from 'react';
import '../../App.css';
import {AppBar, Tabs, Tab} from '@material-ui/core';
import Charges from "./Charges/Charges";
import Categories from "../Categories/Categories";
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import Charts from "../Charts/Charts";
import Incomes from "./Incomes";


const SimpleTabs = (props) => {
    const [value, setValue] = React.useState(0);

    const handleTabs = (e, val) => {
        setValue(val);
    }
    return (

            <div className="tabs-wrapper">
                <div>
                    <AppBar position="static" style={{background: '#848482'}}>
                        <Tabs value={value} onChange={handleTabs}>
                            <Tab label="Charges"/>
                            <Tab label="Incomes"/>
                        </Tabs>
                        <div>
                            <Route path='/home' component={Home}/>
                            <Route path='/charts' component={Charts}/>
                            <Route path='/categories' component={Categories}/>
                        </div>
                    </AppBar>
                </div>
                <TabPanel value={value} index={0}>
                    <Charges
                        products={props.products}
                        handleChange={props.handleChange}
                        checkFilterProducts={props.checkFilterProducts}
                        checkFilterTotal={props.checkFilterTotal}
                        checkFilterDate={props.checkFilterDate}
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Incomes
                        state={props.state}
                        incomes={props.incomes}
                        checkFilterIncomesCategory={props.checkFilterIncomesCategory}
                        checkFilterIncomesTotal={props.checkFilterIncomesTotal}
                        checkFilterIncomesDate={props.checkFilterIncomesDate}/>
                </TabPanel>

            </div>



    )
}

function TabPanel(props) {
    const {children, value, index} = props;
    return (
        <div>
            {
                value === index && (
                    <div>{children}</div>
                )

            }
        </div>

    )
}

export default SimpleTabs;

