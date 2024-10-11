export const TodoItem = ({data}) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between"> {/* Todo Item */}
        <span className="align-self-center">{data.descripcion}</span>
        <button className="btn btn-danger">Borrar</button>
      </li>
    </>
  )
}