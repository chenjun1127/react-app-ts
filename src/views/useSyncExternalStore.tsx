import { useSyncExternalStore } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../store";
import { increment } from "../store/slices/counterSlice";

const useASelector: TypedUseSelectorHook<RootState> = useSelector;

const UseSyncExternalStorePage = () => {
  // 参考:https://juejin.cn/post/7118937685653192735#heading-7
  const { counter } = useASelector((state) => state);
  // console.log('useSyncExternalStore state:' + counter);
  const dispatch = useDispatch();
  const state = useSyncExternalStore(store.subscribe, () => store.getState().counter)
  console.log(state)
  return (
    <div>
      <p>{counter.value}</p>
      <p>{state.value}</p>
      <button onClick={() => dispatch(increment())} >点击</button>
    </div>
  );
}
export default UseSyncExternalStorePage;