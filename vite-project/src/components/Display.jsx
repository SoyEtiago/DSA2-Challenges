export const Display = ({displayValue}) => {
  return (
    <input type="text" value={(displayValue)} readOnly className="display" disabled/>
  )
}