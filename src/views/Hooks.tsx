import { Link, Route, Routes } from "react-router-dom";
import UseCallbackPage from "./useCallback";
import UseContextPage from "./useContext";
import UseDeferredValuePage from "./useDeferredValue";
import UseEffectPage from "./useEffect";
import UseMemoPage from "./useMemo";
import UseReducerPage from "./useReducer";
import UseRefPage from "./useRef";
import UseStatePage from "./useState";
import UseSyncExternalStorePage from "./useSyncExternalStore";
import UseTransitionPage from "./useTransition";

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
          <Link to="/useSyncExternalStore">useSyncExternalStore</Link>
          <Link to="/useTransition">useTransition</Link>
          <Link to="/useDeferredValue">useDeferredValue</Link>
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
        <Route path="/useSyncExternalStore" element={<UseSyncExternalStorePage />} />
        <Route path="/useTransition" element={<UseTransitionPage />} />
        <Route path="/useDeferredValue" element={<UseDeferredValuePage />} />
      </Routes>
    </header>
  </div>
  );
}