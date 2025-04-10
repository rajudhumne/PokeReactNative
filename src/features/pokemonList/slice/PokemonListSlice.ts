import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../stores/store';
import {fetchAllPokemons} from '../action/pokemonActions';
import {IPokemonListResponseModel} from '../model/pokemonModel';

const initialState: IPokemonListResponseModel = {
  results: [],
  next: '',
  previous: '',
  count: 0,
};
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchAllPokemons.fulfilled,
      (state, action: PayloadAction<IPokemonListResponseModel>) => {
        state = action.payload;
      },
    );
  },
});

export const pokemonData = (state: RootState) => state.pokemon;
export default pokemonSlice.reducer;
