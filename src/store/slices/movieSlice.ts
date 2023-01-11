import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovieListApi } from '../../api';

export interface MovieState {
  list: [];
  totals: number
}
const initialState: MovieState = {
  list: [],
  totals: 0
};

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getMovieData: any = createAsyncThunk('movie/getMovie',
  async () => await getMovieListApi(),
);

// 创建一个 Slice 
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // 数据请求完触发
    loadDataEnd: (state, { payload }) => {
      state.list = payload;
      state.totals = payload.length;
    },
  },
  // extraReducers 字段让 slice 处理在别处定义的 actions， 
  // 包括由 createAsyncThunk 或其他slice生成的actions。
  extraReducers(builder) {
    builder
      .addCase(getMovieData.pending, (state) => {
        console.log("🚀 ~ 进行中！");
      })
      .addCase(getMovieData.fulfilled, (state, { payload }) => {
        state.list = payload.data.list;
        state.totals = payload.data.list.length;
        console.log("🚀 ~ fulfilled", payload);
      })
      .addCase(getMovieData.rejected, (state, err) => {
        console.log("🚀 ~ rejected", err);
      });
  },
});

// 导出方法
export const { loadDataEnd } = movieSlice.actions;

// 默认导出
export const { actions, reducer } = movieSlice;


