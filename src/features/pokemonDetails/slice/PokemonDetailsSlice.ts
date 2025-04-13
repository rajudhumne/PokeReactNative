import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';

import {fetchPokemonDetails} from '../action/PokemonDetailsActions';
import {PokemonDetailResponse} from '../model/pokemonDetailsModel';

export interface IPokemonDetails {
  data: null | PokemonDetailResponse;
  status: string;
}

const initialState: IPokemonDetails = {
  data: null,
  status: '',
};
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
export const pokemonDetails = (state: RootState) => state.pokemonDetails;
export default PokemonDetailsSlice.reducer;
