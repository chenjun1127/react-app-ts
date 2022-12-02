import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import { reducer } from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    movie: reducer,
  },

})
export type RootState = ReturnType<typeof store.getState>

