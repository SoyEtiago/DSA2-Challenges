import "./App.css"
import { useState } from "react"
import { useCounter } from "./hooks/useCounter";

const App = () => {
  const { counter, increment, decrement, reset, setValue } = useCounter(0);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSetValue = () => {
    const valorNumerico = parseInt(inputValue, 10);
    if (!isNaN(valorNumerico)) {
      setValue(valorNumerico);
    }
    setInputValue('');
  }

  return (
    <>
      <h1>Counter</h1>
      <span style={{ display: "block", marginBottom: "12px" }}>{counter}</span>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
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

