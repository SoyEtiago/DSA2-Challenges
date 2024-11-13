import React from 'react';
import useCounter from '../hooks/useCounter';
import { useGetPokemonsByIdQuery } from '../api/pokemonApi';

const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const {data, isLoading} = useGetPokemonsByIdQuery(counter);
  console.log(counter);
  return (
    <div>
      <h1>Pokémon Information</h1>
      
      <h2>Pokemon number {counter}</h2>

      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>

      {isLoading && <p>Loading...</p>}

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