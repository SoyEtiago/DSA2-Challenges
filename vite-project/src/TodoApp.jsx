import { useReducer } from "react"
import { TodoReducer } from "./components/TodoReducer"
import { TodoForm, TodoItem, Title } from "./components"

const initialState =  [{
  id: new Date().getTime(),
  descripcion: 'Hacer los challenges',
  done: false
}]

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  return (
    <>
      <Title/>
      <div className="row">
        <div className="col"> 
          <ul className="list-group">
            <TodoItem/>
          </ul>
        <div className="col">
          <TodoForm/>
        </div>
        </div>
      </div>
    </>
  )
}