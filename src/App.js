import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent"
function App() {
  return (
  <div>
      <Navigation />
      <TabsContent />
  </div>
  )
}

export default App;
