import React from 'react';
<<<<<<< HEAD
import "./tabs.css"
import {AppBar, Tabs, Tab } from '@material-ui/core';
import Content from "./Content";
import SecondContent from "./SecondContent";
=======
import '../../App.css';
import {AppBar, Tabs, Tab} from '@material-ui/core';
import Charges from "./Charges/Charges";
import Categories from "../Categories/Categories";
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import Charts from "../Charts/Charts";
import Incomes from "./Incomes";
>>>>>>> c91a0ab96dc7b782c793cba7e69b6e79ced90a6f


const SimpleTabs = (props) => {
    const [value, setValue] = React.useState(0);

    const handleTabs = (e, val) => {
        setValue(val);
    }
    return (

<<<<<<< HEAD
  const handleTabs = (e, val) => {
  setValue(val);
}
  return(
      <div className="tabs-wrapper">
        <div > 
        <AppBar position="static"  style={{ background: '#848482' }}>
          <Tabs value={value} onChange={handleTabs} TabIndicatorProps={{style: {background:'white'}}}>
            <Tab label="Charges"  />
            <Tab label="Incones"/>
          </Tabs>
        </AppBar>
        </div>
        <TabPanel value={value} index={0}> <Content/> </TabPanel>
        <TabPanel value={value} index={1}> <SecondContent/> </TabPanel>
       
      </div>
  )
=======
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
>>>>>>> c91a0ab96dc7b782c793cba7e69b6e79ced90a6f
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

