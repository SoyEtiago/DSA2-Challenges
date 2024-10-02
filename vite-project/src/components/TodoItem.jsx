export const TodoItem = () => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between"> {/* Todo Item */}
        <span className="align-self-center">Item 1</span>
        <button className="btn btn-danger">Borrar</button>
      </li>
    </>
  )
}