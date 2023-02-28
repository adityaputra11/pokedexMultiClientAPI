import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
