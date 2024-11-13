import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
  id: Date.now(),
  descripcion: "Hacer parcial..",
  done: false
}]

export const todoSlice = createSlice({
  name: "TODO",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  }
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions