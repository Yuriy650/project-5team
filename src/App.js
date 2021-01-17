import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent";
import AddNewCategory from "./components/Dialogs/AddNewCategory";
import AddNewCharge from "./components/Dialogs/AddNewCharge";
import AddNewIncome from "./components/Dialogs/AddNewIncome";

function App() {
  return (
  <div className="main-wrapper">
      <Navigation />
      <TabsContent />
      <AddNewCategory />
      <AddNewCharge />
      <AddNewIncome />
  </div>
  )
}

export default App;
