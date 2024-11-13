import {configureStore} from "@reduxjs/toolkit"
import { todoSlice } from "./todoSlice";
import {pokemonApi} from "../api/pokemonApi"

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
});