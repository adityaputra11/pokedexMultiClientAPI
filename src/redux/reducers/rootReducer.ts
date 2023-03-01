import pokemonReducer from './pokemon';
import {combineReducers} from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
