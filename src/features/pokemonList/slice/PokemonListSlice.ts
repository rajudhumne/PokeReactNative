import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';
import {pokemonSprite} from '../../../services/config';
import getPokemonIdFromUrl from '../../../util/getPokemonIdFromUrl';
import {fetchAllPokemons} from '../action/pokemonActions';
import {
  IPokemonListResponseModel,
  IPokemonSummary,
} from '../model/pokemonModel';

export interface IPokemonState extends IPokemonListResponseModel {
  searchQuery: string;
  filteredResults: IPokemonSummary[];
  loading: boolean;
}

const initialState: IPokemonState = {
  results: [],
  next: '',
  previous: '',
  count: 0,
  searchQuery: '',
  filteredResults: [],
  loading: false,
};
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      if (action.payload) {
        state.filteredResults = [];
        state.filteredResults = state.results.filter(pokemon => {
          pokemon.name.toLowerCase() === action.payload.toLowerCase();

          const itemData = pokemon.name.toLowerCase();
          const textData = action.payload.toLowerCase();
          return itemData.indexOf(textData) > -1;
        });
      } else {
        state.filteredResults = state.results;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchAllPokemons.fulfilled,
        (state, action: PayloadAction<IPokemonListResponseModel>) => {
          state.loading = false;
          state.count = action.payload.count;
          state.next = action.payload.next;
          state.previous = action.payload.previous;

          // Add sprite URLs to Pokémon results
          const updatedResults = action.payload.results.map(pokemon => {
            const id = getPokemonIdFromUrl(pokemon.url);
            return {
              ...pokemon,
              sprite: `${pokemonSprite}/${id}.png`,
            };
          });
          state.results = [...state.results, ...updatedResults];
          state.filteredResults = state.results;
        },
      )

      .addCase(fetchAllPokemons.pending, (state, _) => {
        state.loading = true;
      })

      .addCase(fetchAllPokemons.rejected, (state, _) => {
        state.loading = false;
      });
  },
});

export const {setSearchQuery} = pokemonSlice.actions;
export const pokemonData = (state: RootState) => state.pokemon;
export default pokemonSlice.reducer;
