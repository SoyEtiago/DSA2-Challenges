import "./App.css"
import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubstract = () => {
    if(counter > 0) setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(0);
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSetValue = () => {
    const valorNumerico = parseInt(inputValue, 10);
    if (!isNaN(valorNumerico) && valorNumerico >= 0) {
      setCounter(valorNumerico);
    } else {
      setCounter(0);
    }
    setInputValue('');
  }

  return (
    <>
      <h1>Counter</h1>
      <span style={{ display: "block", marginBottom: "12px" }}>{counter}</span>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
      <p>Valor personalizado</p>
      <input 
        id="customValue"
        type="number" 
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSetValue}>Aplicar valor</button>
    </>
  )
}

export default App

