import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrement = () => {
    setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
  };

  const reset = () => {
    setCounter(initialValue);
  };

  const setValue = (value) => {
    setCounter(value >= 0 ? value : 0);
  };

  return { counter, increment, decrement, reset, setValue };
}