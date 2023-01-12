import { useEffect, useState } from "react";

const UseStatePage = () => {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(2);
  useEffect(() => {
    setValue(10);
  }, []);
  const handleClick = () => {
    setValue2(20)
  };
  return (
    <>
      <div>UseStatePage</div><div>{`${value}-----${value2}`}</div>
      <button onClick={handleClick}>改变value2</button>
    </>
  )
}

export default UseStatePage;