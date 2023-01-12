import { useDeferredValue, useState } from "react";

// 模拟数据
const list1 = new Array(1000).fill('tab1').map((item, index) => item + '--' + index);
const list2 = new Array(1000).fill('tab2').map((item, index) => item + '--' + index);
const list3 = new Array(1000).fill('tab3').map((item, index) => item + '--' + index);

const tab: any = { tab1: list1, tab2: list2, tab3: list3 };

const UseDeferredValuePage: React.FC = () => {
  // 参考:https://juejin.cn/post/7118937685653192735#heading-9
  const [active, setActive] = useState<string>('tab1'); ////需要立即响应的任务，立即更新任务
  const deferActive = useDeferredValue(active); //把状态延时更新，类似于过渡任务

  const handleChangeTab = (activeItem: string) => {
    setActive(activeItem) // 立即更新
  }
  const renderData = tab[deferActive] // 使用滞后状态
  return (
    <>
      <div className="tab">
        {Object.keys(tab).map((item) => <span className={item === active ? 'active' : ''} key={item} onClick={() => handleChangeTab(item)}>{item}</span>)}
      </div>
      <ul className='content' >
        {renderData.map((item: any) => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}
export default UseDeferredValuePage;