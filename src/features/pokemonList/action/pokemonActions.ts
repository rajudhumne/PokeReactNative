import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../services/api';
import {IPokemonEndpoints} from '../model/pokemonModel';
import {getPokemonListEndPoint} from '../utility/pokemonUtility';

export const fetchAllPokemons = createAsyncThunk(
  'actions/fetchAllPokemons',
  async (url?: string) => {
    const unWrappedUrl =
      url || getPokemonListEndPoint(IPokemonEndpoints.list, '');
    const promise = await API.get({
      endPoint: unWrappedUrl,
      isLoader: false,
    });
    const response = await promise;
    return response;
  },
);
