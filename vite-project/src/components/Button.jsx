export const Button = ({value, handleClick, handleOperatorClick, handleClear, handleOperationClick, Name}) => {

  return ( 
  <input type="button" value={value} onClick={handleClick || handleOperatorClick || handleClear || handleOperationClick} className={Name}/>
  );
}; 