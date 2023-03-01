import {pokemonSlice} from './pokemon';
import {combineReducers} from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  pokemon: pokemonSlice.reducer,
});

export default rootReducer;
