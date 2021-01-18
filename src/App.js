import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent";
import AddNewCategory from "./components/Dialogs/AddNewCategory";
import AddNewCharge from "./components/Dialogs/AddNewCharge";
import AddNewIncome from "./components/Dialogs/AddNewIncome";

function App() {
  return (
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
  </div>
  </div>
  )
}

export default App;
