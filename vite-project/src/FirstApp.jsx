import { useState } from 'react'
import './App.css'

const FirstApp = () => {
  const [counter = 0, setCounter] = useState();

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  return (
    <>
    <h1>Counter</h1>
    <span style={{display: "block", marginBottom: "12px"}}> {counter} </span>
    <button onClick={ () => handleAdd() }> +1 </button>
    </>
  )
}

export default FirstApp