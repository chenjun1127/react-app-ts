import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import { Routes, Route, Link } from 'react-router-dom'
import GetManager from './components/get_manager';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
        <div className="column column1">
          <span>
          <Link to="/">Index</Link> |{' '}
            <Link to="/counter">Counter</Link> |{' '}
            <Link to="/getApi">Get Data</Link>
          </span>
        </div>
        <Routes> 
          <Route path="/" element />
          <Route path="/counter" element={<Counter value={0} />} />
          <Route path="/getApi" element={<GetManager />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
