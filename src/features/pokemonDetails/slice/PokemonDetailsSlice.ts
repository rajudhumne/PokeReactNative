import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';
import {
  fetchPokemonDetails,
  fetchPokemonSpecies,
} from '../action/pokemonDetailsActions';
import {IPokemonDetailsModel} from '../model/PokemonDetailsModel';
import {IPokemonSpeciesModel} from '../model/PokemonSpeciesModel';

export interface IPokemonDetailsState {
  about: IPokemonDetailsModel | null;
  species: IPokemonSpeciesModel | null;
}

const initialState: IPokemonDetailsState = {
  about: null,
  species: null,
};

const pokemonDetailSlice = createSlice({
  name: 'PokemonDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchPokemonDetails.fulfilled,
        (state, action: PayloadAction<IPokemonDetailsModel>) => {
          state.about = action.payload;
        },
      )
      .addCase(
        fetchPokemonSpecies.fulfilled,
        (state, action: PayloadAction<IPokemonSpeciesModel>) => {
          state.species = action.payload;
        },
      );
  },
});

export const onPokemonDetailLoad = (state: RootState) => state.pokemonDetail;

export default pokemonDetailSlice.reducer;
