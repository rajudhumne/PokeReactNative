import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';

import {fetchPokemonDetails} from '../action/PokemonDetailsActions';
import {PokemonDetailResponse} from '../model/pokemonDetailsModel';

// Interface for the Pokemon details state
export interface IPokemonDetails {
  data: null | PokemonDetailResponse;
  status: string;
}

// Initial state for Pokemon details slice
const initialState: IPokemonDetails = {
  data: null,
  status: '',
};

// Slice for managing Pokemon detail fetching logic
const PokemonDetailsSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchPokemonDetails.fulfilled,
        (state, action: PayloadAction<PokemonDetailResponse>) => {
          state.data = action.payload;
          state.status = 'Success';
        },
      )

      .addCase(fetchPokemonDetails.pending, (state, _) => {
        state.status = 'Failure';
      })

      .addCase(fetchPokemonDetails.rejected, (state, _) => {
        state.status = 'Failure';
      });
  },
});

export const {} = PokemonDetailsSlice.actions;
// Selector to access Pokemon details state from the store
export const pokemonDetails = (state: RootState) => state.pokemonDetails;
export default PokemonDetailsSlice.reducer;
