import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../services/api';
import {IPokemonEndpoints} from '../model/pokemonModel';
import {getPokemonListEndPoint} from '../utility/pokemonUtility';

export const fetchAllPokemons = createAsyncThunk(
  'actions/fetchAllPokemons',
  async () => {
    const promise = await API.get({
      endPoint: getPokemonListEndPoint(IPokemonEndpoints.list),
      isLoader: true,
    });
    const response = await promise;
    console.log(response);
    return response;
  },
);
