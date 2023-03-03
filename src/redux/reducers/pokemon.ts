import {ApiClient, PokemonType, PokemonData} from './../../utils/types';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {URI} from '../../utils/assetConfig';
import {TYPE_COLORS} from '../../utils/constants';

interface FetchDataProps {
  apiClient: ApiClient;
  name?: string;
}
export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async ({apiClient}: FetchDataProps, thunkAPI) => {
    try {
      const response = await apiClient.get('/pokemon?limit=20');
      if (response.ok) {
        const pokemon = await Promise.all(
          response.data.results.map(async (result: any) => {
            const res = await fetch(result.url);
            const pokemonData = await res.json();
            const types: PokemonType[] = pokemonData.types.map((type: any) => {
              const name = type.type.name;
              const color = TYPE_COLORS[name];

              return {
                name,
                url: type.type.url,
                color,
              };
            });
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: `${URI.POKEMON_URI_IMAGE}${pokemonData.id}.png`,
              types,
              weight: pokemonData.weight,
              height: pokemonData.height,
              abilities: pokemonData.abilities,
            };
          }),
        );

        return pokemon as PokemonData[];
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

interface PokemonState {
  pokemon: PokemonData[] | null | undefined; // Replace `any` with your specific data type
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
