import { memo, useCallback, useState } from "react";
const set = new Set();
const UseCallbackPage = () => {
  // 参数是内联回调函数和依赖项数组，
  // 当子组件接收一个函数props时，一般会使用useCallback来缓存这个函数，减少不必要的re-render。以下例子：向子组件传递一个函数，在父组件每次re-render的时候，函数会重新创建新的，这会导致使用这个函数props的子组件也re-render，但这是不必要的，可以用useCallback来解决。
  // 结论：返回一个缓存的函数，添加依赖项数组可以避免函数的无意义计算，降低了子组件的渲染开销。
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<any>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t: any) => [...t, "New Todo"]);
  }, [])
  return (
    <div>
      <div>---useCallback---</div>
      <Child todos={todos} addTodo={addTodo} />
      <div className="counter-container">
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}
// react hooks typescirpt父子组件传值类型写法
interface IChildProps {
  addTodo: () => void;
  todos: any[];
}

const Child = memo((props: IChildProps) => {
  const { todos, addTodo } = props;
  console.log('child render');
  return <div className="todos-container">
    <div className="todos">
      {todos.map((todo: string, index: number) => {
        return <p key={index}>{todo}</p>
      })}
    </div>
    <button onClick={addTodo}>Add Todo</button>
  </div>
})
export default UseCallbackPage;