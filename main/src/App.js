import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';
import Results from './Results/Results';
import CommonDataManager from './CommonDataManager';

let commonData = CommonDataManager.getInstance();
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
