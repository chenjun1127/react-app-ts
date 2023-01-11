import { useRef } from "react";

const UseRefPage = () => {
  // 返回值是一个可变的ref对象，并且这个对象的值发生改变时不会引起页面的渲染。
  // 结论：useRef可以存储不需要引起页面渲染的数据；修改useRef值的唯一方法是修改.current，且修改后不会引起重渲染。
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus;
      inputRef.current.value = '自定义';
    }
  }
  return <>
    <div>--useRef--</div>
    <input type="text" ref={inputRef} />
    <button onClick={handleClick}>click</button>
  </>
}
export default UseRefPage;