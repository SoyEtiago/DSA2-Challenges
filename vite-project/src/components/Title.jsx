export const Title = ({total, missing}) => {
  return (
    <>
      <h1>TodoApp: {total}, <small>Pendientes: {missing}</small></h1>
      <hr />
    </>
  )
}