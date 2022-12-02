import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { actions, getMovieData } from "../store/slices/movieSlice";

const GetManager = () => {
  const { list, totals } = useSelector((state: RootState) => state.movie)
  const dispatch = useDispatch();
  console.log('actions:' + actions.loadDataEnd);
  return <div>
    <button onClick={() => dispatch(getMovieData())}>获取数据</button>
    <h1>{totals}</h1>
    <ul>
      {
        list.map((item: any) => { return <li key={item.name}> {item.name}</li> })
      }
    </ul>
  </div>
}
export default GetManager;