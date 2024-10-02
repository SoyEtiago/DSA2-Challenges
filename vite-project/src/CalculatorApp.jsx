import { useState } from "react";
import { Display, Pad} from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';

const operatorStrings = ['+', '-', '/', '*'];

export const CalculatorApp = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (e) => {
    console.log(e.target.value);
    setDisplay(display + e.target.value);
  }

  const handleOperatorClick = (e) => {
    const operatorStrings = ['+', '-', '/', '*'];
    if(display === '') {
      return;
    } else if(display.match(`[${operatorStrings}]`)) {
      console.log('ya lo incluye');
    } else {
      setDisplay(display + ' ' + e.target.value + ' ');
    }
  }

  const handleOperationClick = () => {
    // Aquí va la lógica de las operaciones
    let [firstOperand, operator, secondOperand] = display.trim().split(' ');
    switch (operator) {
      case '+':
          setDisplay((parseInt(firstOperand) + parseInt(secondOperand)).toString());
        break;
      case '-':
        setDisplay((parseInt(firstOperand) - parseInt(secondOperand)).toString());
      break;
      case '/':
        setDisplay(((parseInt(firstOperand) / parseInt(secondOperand)).toString() == 'NaN' ? 'Indeterminado' : ((parseInt(firstOperand) / parseInt(secondOperand)).toString())));
      break;
      case '*':
        setDisplay((parseInt(firstOperand) * parseInt(secondOperand)).toString());
      break;
    }
  }

  const handleClear = () => {
    setDisplay('');
  }
  return(
    <>
    <div className="container">
      <h1>Calculator App</h1>
      <Display displayValue={display}/>
      <Pad handleClick={handleClick} handleOperatorClick={handleOperatorClick} handleClear={handleClear} handleOperationClick={handleOperationClick}/>
    </div>      
    </>
  )
}