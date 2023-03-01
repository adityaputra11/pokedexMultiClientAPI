import {ApiClient} from './../../utils/types';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface FetchDataProps {
  apiClient: ApiClient;
  name?: string;
}
export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async ({apiClient}: FetchDataProps, thunkAPI) => {
    try {
      const response = await apiClient.get('/pokemon');
      console.log('response', response);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

interface PokemonState {
  pokemon: any; // Replace `any` with your specific data type
  isLoading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemon: null,
  isLoading: false,
  error: null,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPokemon.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pokemon = action.payload;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        action.error.message ?? 'An error occurred while fetching the Pokemon.';
    });
  },
});

export default pokemonSlice.reducer;
