import { useReducer } from "react"
import { TodoReducer } from "./TodoReducer"

const initialState =  [{
  id: new Date().getTime(),
  descripcion: 'Hacer los challenges',
  done: false
}]

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  return (
    <>
      <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
          </ul>
        </div>
        <div className="col5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input type="text" className="form-control" />
            <button className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}