import { memo, useEffect, useReducer } from "react";
import { getMovieListApi } from "../api";

interface IType {
  type: string,
  data?: any,
}

const fetchReducer = (state: any, action: IType) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, status: "初始化", loading: true, error: false };
    case 'FETCH_SUCCESS':
      return { ...state, status: "成功", loading: false, error: false, data: action.data };
    case 'FETCH_FAIL':
      return { ...state, status: "失败", loading: false, error: true };
    default:
      return null;
  }
}

const UseReducerPage = memo(() => {
  // 参数：第一个是reducer纯函数，第二个是初始state，第三个是修改初始state，用于重置，返回值是一个数组，数组第一个元素是state的当前值，第二个元素是发送action的dispatch函数
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    error: false,
    status: '',
    data: {}
  });
  const getData = async () => {
    const { data } = await getMovieListApi().catch(() => {
      dispatch({ type: 'FETCH_FAIL', data: null })
      return false
    })
    if (!data) return
    dispatch({ type: 'FETCH_SUCCESS', data })
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_INIT' })
    getData()
  }, [])
  console.log('state---', state)
  return <>
    <div>---useReducer---</div>
    <div>请求状态: {state.status}</div>
  </>
})
export default UseReducerPage;



