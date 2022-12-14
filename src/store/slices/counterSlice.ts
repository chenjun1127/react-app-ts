import { createSlice } from "@reduxjs/toolkit";
export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
  }
})
export const { increment, decrement } = counterSlice.actions;
export default counterSlice
