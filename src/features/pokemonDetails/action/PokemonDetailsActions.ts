import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../services/api';

import {IPokemonEndpoints} from '../../pokemonList/model/pokemonModel';
import {getPokemonListEndPoint} from '../../pokemonList/utility/pokemonUtility';

export const fetchPokemonDetails = createAsyncThunk(
  'actions/fetchPokemonDetails',
  async (name: string) => {
    const unWrappedUrl = getPokemonListEndPoint(
      IPokemonEndpoints.details,
      name,
    );
    const promise = await API.get({
      endPoint: unWrappedUrl,
      isLoader: true,
    });
    const response = await promise;
    return response;
  },
);

export const fetchPokemonSpecies = createAsyncThunk(
  'actions/fetchPokemonSpecies',
  async (name: string) => {
    const unWrappedUrl = getPokemonListEndPoint(
      IPokemonEndpoints.species,
      name,
    );
    const promise = await API.get({
      endPoint: unWrappedUrl,
      isLoader: true,
    });
    const response = await promise;
    return response;
  },
);
