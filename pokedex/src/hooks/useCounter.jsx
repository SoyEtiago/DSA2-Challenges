import { useState } from 'react';

const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return { counter, increment };
};

export default useCounter;