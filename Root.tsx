import {ApolloProvider} from '@apollo/client';
import React from 'react';
import App from './src/App';
import {ThemeProvider} from './src/theme/ThemeProvider';
import clients from './src/services/api';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function Root(): JSX.Element {
  return (
    <ApolloProvider client={clients.graphql}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default Root;
