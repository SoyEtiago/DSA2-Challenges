import { useEffect, useReducer, useRef } from "react"
import { TodoForm, TodoList, Title } from "./components"
import * as types from "./components/types"
import {useDispatch, useSelector} from "react-redux";


export const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  
  const inputRef = useRef();
  // const [todos, dispatchTodo] = useReducer(TodoReducer, initialState, init);


  // UseMemo
  const OnNewTodo = (e) => {
    e.preventDefault();
    if(inputRef.current.value) {
      const newTodo = {
        id: new Date().getTime(),
        descripcion: inputRef.current.value,
        done: false
      }
  
      inputRef.current.value = "";
  
  
      const action = {
        type: types.CREATE_TODO,
        payload: newTodo
      }
      useDispatch(action)
    }
  }
  return (
    <>
      <Title total={todos.length} missing={todos.filter((todo) => todo.done == false).length}/>
      <div className="row">
        <div className="col-7">
          <TodoList/>
        </div>
        <div className="col-5">
          <TodoForm OnNewTodo={OnNewTodo}/>
        </div>
      </div>
    </>
  )
}