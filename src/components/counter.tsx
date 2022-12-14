import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { CounterState, decrement, increment } from '../store/slices/counterSlice';

const Counter = ({ value }: CounterState) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}
export default Counter;