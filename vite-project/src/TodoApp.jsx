import { useReducer, useRef } from "react"
import { TodoReducer } from "./components/TodoReducer"
import { TodoForm, TodoList, Title } from "./components"

const initialState =  [{
  id: new Date().getTime(),
  descripcion: 'Hacer los challenges',
  done: false
}]

export const TodoApp = () => {
  const inputRef = useRef();
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);


  // UseMemo
  const OnNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      descripcion: inputRef.current.value,
      done: false
    }

    inputRef.current.value = "";


    const action = {
      type: 'Agregar TODO',
      payload: newTodo
    }
    dispatchTodo(action)
  }

  return (
    <>
      <Title/>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}/>
        </div>
        <div className="col-5">
          <TodoForm OnNewTodo={OnNewTodo} inputRef={inputRef}/>
        </div>
      </div>
    </>
  )
}