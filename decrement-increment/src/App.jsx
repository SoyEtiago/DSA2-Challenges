// App.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, incrementBy } from './store/counterSlice';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // Estado local para almacenar el valor ingresado por el usuario
  const [inputValue, setInputValue] = useState(0);

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setInputValue(Number(value)); // Convierte el valor a número
    }
  };

  return (
    <>
      <h1>App</h1>
      <hr />
      <span>Counter is: {counter}</span>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => dispatch(increment())}
      >
        +1
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(decrement())}
      >
        -1
      </button>
      <div>
        <p>Increment By</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input"
        />
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(incrementBy(inputValue))}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
