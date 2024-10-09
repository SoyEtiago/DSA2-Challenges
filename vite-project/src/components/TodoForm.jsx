import { memo } from "react";

export const TodoForm =({OnNewTodo, inputRef}) => {
    return (
      <>
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={OnNewTodo}>
            <input type="text" className="form-control" placeholder='Descripción de la tarea' ref={inputRef}/>
            <button className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
      </>
    )
}