import {ApolloClient, InMemoryCache} from '@apollo/client';
import {create} from 'apisauce';

const api = create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const CLIENT = 'fetch';

const clients = {
  graphql: new ApolloClient({
    uri: 'https://graphql.example.com',
    cache: new InMemoryCache(),
  }),

  fetch: {
    get: async (path: string) => {
      const response = await api.get(path);
      return response;
    },
  },
};

export {CLIENT};
export default clients;
