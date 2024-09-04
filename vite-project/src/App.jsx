import "./App.css"
import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  }
  const handleSubstract = () => {
    setCounter(counter - 1);
  }
  const handleReset = () => {
    setCounter(0);
  }

  return (
    <>
    <h1>Counter</h1>
    <span style={{display: "block", marginBottom: "12px"}}>{counter}</span>
    <button onClick={()=>handleAdd()}>+1</button>
    <button onClick={()=>handleReset()}>Reset</button>
    <button onClick={()=>handleSubstract()}>-1</button>
    </>
  )
}

export default App
