import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todoSlice";

export const store = configureStore({
    reducer: {
      todos: reducer
    }
  })

  export  type RootState = ReturnType  <typeof store.getState>