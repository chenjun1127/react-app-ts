import { useEffect } from "react";

const UseEffectPage = () => {
  useEffect(() => {
    console.log('useEffect1');
    const timeId = setTimeout(() => {
      console.log('useEffect1-setTimeout-1000');
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);
  useEffect(() => {
    console.log('useEffect2');
    const timeId = setInterval(() => {
      console.log('useEffect2-setInterval-2000');
    }, 1000);
    return () => { 
      clearInterval(timeId);
    };
  }, []);
  return (
    <div>
      <div>---useEffect---</div>
      {(() => {
        console.log('render');
        return null;
      })()}
    </div>
  );
}
// render => useEffect1 => useEffect2 => useEffect2-setInterval-1000 => useEffect1-setTimeout-2000 => index.js:67 useEffect2-setInterval-1000 * n
export default UseEffectPage;