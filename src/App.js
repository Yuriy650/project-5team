import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent";
import AddNewCategory from "./components/Dialogs/AddNewCategory";
import AddNewCharge from "./components/Dialogs/AddNewCharge";
import AddNewIncome from "./components/Dialogs/AddNewIncome";
import  {BrowserRouter, Route} from "react-router-dom";
import Categories from "./components/Categories/Categories";

function App() {
  return (
<BrowserRouter>
  <div className="main-page">
  <div className="main-wrapper">
      <Navigation />
  </div>
  <div className="main-btn">
    <div className="bnt-add">
    <AddNewCategory />
    <AddNewCharge />
    <AddNewIncome />
    </div>
    
    <div className="bnt-tabs">
    <TabsContent />

    </div>
    <Route path='/categories' component={Categories}/>
  </div>

  </div>


</BrowserRouter>

  )
}

export default App;
