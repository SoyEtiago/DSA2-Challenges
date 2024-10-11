import React from 'react';
import useFetch from '../hooks/useFetch';
import useCounter from '../hooks/useCounter';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data, isLoading, hasError } = useFetch(url);

  return (
    <div>
      <h1>Pokémon Information</h1>

      <button onClick={increment}>Next Pokémon</button>

      {isLoading && <p>Loading...</p>}
      {hasError && <p>Error: {hasError}</p>}

      {data && (
        <blockquote>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Height:</strong> {data.height}</p>
          <p><strong>Weight:</strong> {data.weight}</p>
          <img 
            src={data.sprites.front_default} 
            alt={data.name} 
            width="150" 
          />
        </blockquote>
      )}
    </div>
  );
};

export default MultipleCustomHooks;