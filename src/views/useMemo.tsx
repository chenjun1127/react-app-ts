import { useMemo, useState } from "react";

const UseMemoPage = () => {
  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(2)
  // 参数是创建函数和依赖项数组。
  const expensive = useMemo(() => {
    console.log('运算');
    let sum = 0;
    for (let i = 0; i < 100 * num1; i++) {
      sum += i;
    }
    return sum;
  }, [num1]);
  const handleClick1 = () => {
    setNum1(num1 + 1);
  }
  const handleClick2 = () => {
    setNum2(num2 + 1);
  }
  // 结论：useMemo发生在render前，返回一个缓存的数据，且仅在依赖项改变后变化。使用useMemo可以避免多余的计算开销。
  return <>
    <div>当前num1：{num1}</div>
    <div>当前num2：{num2}</div>
    <div>当前expensive(仅依赖num1)：{expensive}</div>
    <div>
      {(() => {
        console.log('render');
        return null;
      })()}
      <button onClick={handleClick1}>num1++</button>
      <button onClick={handleClick2}>num2++</button>
    </div>
  </>
}

export default UseMemoPage;