import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../services/api';
import {IPokemonEndpoints} from '../../pokemonList/model/pokemonModel';
import {getPokemonListEndPoint} from '../../pokemonList/utility/pokemonUtility';

export const fetchPokemonDetails = createAsyncThunk(
  'actions/fetchPokemonDetails',
  async (id: number) => {
    const promise = await API.get({
      endPoint: getPokemonListEndPoint(IPokemonEndpoints.details, id),
      isLoader: false,
    });
    const response = await promise;
    console.log(response);
    return response;
  },
);

export const fetchPokemonSpecies = createAsyncThunk(
  'actions/fetchPokemonSpecies',
  async (id: number) => {
    const promise = await API.get({
      endPoint: getPokemonListEndPoint(IPokemonEndpoints.species, id),
      isLoader: false,
    });
    const response = await promise;
    console.log(response);
    return response;
  },
);
