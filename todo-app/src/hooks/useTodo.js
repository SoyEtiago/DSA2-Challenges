import { useEffect, useReducer, useCallback, useRef } from "react";
import { TodoReducer } from "../components/TodoReducer";
import * as types from "../components/types";
const useTodo = () => {
  const inputRef = useRef();
  
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatchTodo] = useReducer(TodoReducer, [], init);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [todos]);


  const addTodo = useCallback((description) => {
    if (description) {
      const newTodo = {
        id: new Date().getTime(),
        descripcion: description,
        done: false,
      };

      const action = {
        type: types.CREATE_TODO,
        payload: newTodo,
      };
      dispatchTodo(action);
    }
  }, []);

  const deleteTodo = useCallback((id) => {
    const action = {
      type: types.DELETE_TODO,
      payload: { id },
    };
    dispatchTodo(action);
  }, []);

  const toggleTodo = useCallback((id) => {
    const action = {
      type: types.TOGGLE_TODO,
      payload: { id },
    };
    dispatchTodo(action);
  }, []);

  return {
    todos,
    inputRef,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};

export default useTodo;