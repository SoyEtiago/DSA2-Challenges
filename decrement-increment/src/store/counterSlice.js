import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
      if (state.counter < 0) {
        state.counter = 0;
      }
    },
  }
})

export const {increment, decrement, incrementBy} = counterSlice.actions