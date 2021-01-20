import React from 'react';
import '../../App.css';
import {AppBar, Tabs, Tab } from '@material-ui/core';
import Charges from "./Charges";
import SecondContent from "./SecondContent";
import Categories from "../Categories/Categories";
import {BrowserRouter, Route} from "react-router-dom";





const SimpleTabs = () => {
  const[value, setValue] = React.useState(0);

  const handleTabs = (e, val) => {
  setValue(val);
}
  return(
<BrowserRouter>
      <div className="tabs-wrapper">
        <div > 
        <AppBar position="static"  style={{ background: '#848482' }}>
          <Tabs value={value} onChange={handleTabs}>
            <Tab label="Charges"  />
            <Tab label="Incones"/>
          </Tabs>
        </AppBar>
        </div>
        <TabPanel value={value} index={0}> <Charges/> </TabPanel>
        <TabPanel value={value} index={1}> <SecondContent/> </TabPanel>
          <Route path='/categories' component={Categories}/>
      </div>
</BrowserRouter>

  )
}

function TabPanel(props) {
  const {children, value, index } =props;
  return(
    <div>
      {
      value===index&&(
        <div>{children}</div>
      )

      }
    </div>

  )
}
export default SimpleTabs;

