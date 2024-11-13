import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export const TodoForm =({OnNewTodo}) => {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if(e.target[0]) {
      const descripcion = e.target[0].value;
      console.log(descripcion);
      const todo = {
        id: Date.now(),
        descripcion: descripcion,
        done: false
      }
      dispatch(addTodo(todo))
    }
  }
    return (
      <>
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleAdd}>
            <input type="text"className="form-control" placeholder='Descripción de la tarea'/>
            <button className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
      </>
    )
}