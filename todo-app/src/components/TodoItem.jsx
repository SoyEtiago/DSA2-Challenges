import React, { memo } from "react";

export const TodoItem = memo(({data, id, deleteTodo, toggleDone}) => {
  const handleToggle = (e) => {
    toggleDone(id);
  };

  const clickBtnDelete = (e) => {
    return deleteTodo(id);
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between"> {/* Todo Item */}
        <div className="form-check d-flex align-items-center justify-content-between">
          <input className="form-check-input" type="checkbox" value="" id={`flexCheckDefault-${id}`} checked={data.done} onChange={handleToggle}/>
          <label className={`form-check-label ms-2 w-100 ${data.done ? "text-decoration-line-through" : ""}`} htmlFor={`flexCheckDefault-${id}`} style={{cursor: "pointer"}}>
          {data.descripcion}
          </label>
        </div>
        <div>
          <button type="button" className="btn btn-danger" onClick={clickBtnDelete}>Delete</button>
        </div>
      </li>
    </>
  )
})