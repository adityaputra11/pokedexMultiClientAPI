import {BottomSheetRef} from './../components/atoms/BottomSheet/BottomSheet';
// i would like use type for state and props, interface for response api

export type RootStackParamList = {
  Home: undefined;
};

export type ApiClient = {
  name: string;
  get: (path: string) => Promise<any>;
  query?: (query: string, variables?: any) => Promise<any>;
};

export interface PokemonResult {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

export interface PokemonType {
  name: string;
  url: string;
  color: string;
}

export interface PokemonData {
  id: number;
  name: string;
  number: string;
  types: PokemonType[];
  image: string;
}

export type BottomSheetHandle = BottomSheetRef;
