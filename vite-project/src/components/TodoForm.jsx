export const TodoForm = () => {
  return (
    <>
      <div className="col5"> {/* Todo Form */}
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input type="text" className="form-control" />
            <button className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
    </>
  )
}