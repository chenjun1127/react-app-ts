import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/counter';
import Manager from './components/manager';
import Hooks from './views/Hooks';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="column column1 app-title">
          <span>
            <Link to="/">Index</Link> 
            <Link to="/counter">Counter</Link> 
            <Link to="/getApi">Get Data</Link>
            <Link to="/hooks">React Hooks</Link>
          </span>
        </div>
        <Routes>
          <Route path="/*" element={<Hooks />} />
          <Route path="/counter" element={<Counter value={0} />} />
          <Route path="/getApi" element={<Manager />} />
          <Route path="/hooks/*" element={<Hooks />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
