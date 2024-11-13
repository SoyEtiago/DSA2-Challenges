import { useState } from 'react';

const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCounter((prevCounter) => {
      if(prevCounter > 1) {
        return prevCounter - 1;
      } else {
        return prevCounter
      }
    });
  };
  const reset = () => {
    setCounter((prevCounter) => prevCounter = 1);
  };

  return { counter, increment, decrement, reset};
};

export default useCounter;