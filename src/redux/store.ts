import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from '../features/appLoader/slice/AppLoaderSlice.ts';
import pokemonDetailReducer from '../features/pokemonDetails/slice/pokemonDetailsSlice.ts';
import pokemonReducer from '../features/pokemonList/slice/PokemonListSlice.ts';
const combinedReducers = combineReducers({
  pokemon: pokemonReducer,
  appLoader: appReducer,
  pokemonDetail: pokemonDetailReducer,
});

export const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
