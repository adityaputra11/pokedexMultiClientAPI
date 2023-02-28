import {ApolloProvider} from '@apollo/client';
import React from 'react';
import App from './src/App';
import {ThemeProvider} from './src/theme/ThemeProvider';
import clients from './src/services/api';

function Root(): JSX.Element {
  return (
    <ApolloProvider client={clients.graphql}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default Root;
