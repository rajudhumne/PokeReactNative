import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';
import {fetchAllPokemons} from '../action/pokemonActions';
import {
  IPokemonListResponseModel,
  IPokemonSummary,
} from '../model/pokemonModel';

export interface IPokemonState extends IPokemonListResponseModel {
  searchQuery: string;
  filteredResults: IPokemonSummary[];
}

const initialState: IPokemonState = {
  results: [],
  next: '',
  previous: '',
  count: 0,
  searchQuery: '',
  filteredResults: [],
};
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      // Update filtered results based on the current search query
      state.filteredResults = Array.from(
        new Map(
          state.results
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(action.payload.toLowerCase()),
            )
            .map(pokemon => [pokemon.name, pokemon]), // Use the name as a unique key
        ).values(),
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchAllPokemons.fulfilled,
      (state, action: PayloadAction<IPokemonListResponseModel>) => {
        console.log('fetching...');
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.results = [...state.results, ...action.payload.results];
        state.filteredResults = state.results;
      },
    );
  },
});

export const {setSearchQuery} = pokemonSlice.actions;
export const pokemonData = (state: RootState) => state.pokemon;
export default pokemonSlice.reducer;
