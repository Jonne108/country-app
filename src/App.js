import React from 'react';
import './App.css';
import CountryTable from './components/CountryTable';
import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
function App() {
  return (
    <div className="App">
      <Header />
      <NavDrawer />
      <CountryTable />
    </div>
  );
}

export default App;
