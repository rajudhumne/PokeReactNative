import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from '../features/appLoader/slice/AppLoaderSlice.ts';
import pokemonDetailsReducer from '../features/pokemonDetails/slice/PokemonDetailsSlice.ts';
import pokemonReducer from '../features/pokemonList/slice/PokemonListSlice.ts';

const combinedReducers = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetails: pokemonDetailsReducer,
  appLoader: appReducer,
});

export const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
