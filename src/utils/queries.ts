import {gql} from '@apollo/client';

export const POKEMON_QUERY = gql`
  query PokemonQuery($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      types
      moves {
        name
      }
    }
  }
`;
