import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "Pokemons",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/pokemon/"
  }),
  endpoints: (builder) => ({
    getPokemonsById: builder.query({
      query: (id) => `/${id}`
    })
  })
})

export const {useGetPokemonsByIdQuery} = pokemonApi