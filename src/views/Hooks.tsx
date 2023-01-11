import { Link, Route, Routes } from "react-router-dom";
import UseCallbackPage from "./useCallback";
import UseContextPage from "./useContext";
import UseEffectPage from "./useEffect";
import UseMemoPage from "./useMemo";
import UseReducerPage from "./useReducer";
import UseRefPage from "./useRef";
import UseStatePage from "./useState";

export default function Hooks() {
  return (<div className="react-hooks">
    <header className="App-header">
      <div className="column column1 app-title">
        <span> 
          <Link to="/useState">useState</Link>
          <Link to="/useEffect">useEffect</Link>
          <Link to="/useReducer">useReducer</Link>
          <Link to="/useMemo">useMemo</Link>
          <Link to="/useCallback">useCallback</Link>
          <Link to="/useRef">useRef</Link>
          <Link to="/useContext">useContext</Link>
        </span>
      </div>
      <Routes> 
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/useEffect" element={<UseEffectPage />} />
        <Route path="/useReducer" element={<UseReducerPage />} />
        <Route path="/useMemo" element={<UseMemoPage />} />
        <Route path="/useCallback" element={<UseCallbackPage />} />
        <Route path="/useRef" element={<UseRefPage />} />
        <Route path="/useContext" element={<UseContextPage />} />
      </Routes>
    </header>
  </div>
  );
}