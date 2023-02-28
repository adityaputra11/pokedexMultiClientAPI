import {ApolloProvider} from '@apollo/client';
import React from 'react';
import App from './src/App';
import clients from './src/services/api';

function Root(): JSX.Element {
  return (
    <ApolloProvider client={clients.graphql}>
      <App />
    </ApolloProvider>
  );
}

export default Root;
