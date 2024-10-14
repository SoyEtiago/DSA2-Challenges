export const TodoItem = ({data, id}) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between"> {/* Todo Item */}
        <div className="form-check d-flex align-items-center justify-content-between">
          <input className="form-check-input" type="checkbox" value="" id={`flexCheckDefault-${id}`}/>
          <label className={`form-check-label ms-2 w-100`} htmlFor={`flexCheckDefault-${id}`} style={{cursor: "pointer"}}>
          {data.descripcion}
          </label>
        </div>
      </li>
    </>
  )
}