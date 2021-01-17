import './App.css';
import Navigation from "./components/Navigation";
import TabsContent from "./components/Tabs/TabsContent"
function App() {
  return (
  <div className="main-wrapper">
      <Navigation />
      <TabsContent />
  </div>
  );
}

export default App;
