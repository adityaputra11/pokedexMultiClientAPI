import React, {ComponentType} from 'react';
import clients from '../services/api';

const withApiClient =
  <P extends object>(clientName: keyof typeof clients) =>
  (WrappedComponent: ComponentType<P>): ComponentType<P> => {
    const client = clients[clientName];
    return (props: P) => {
      return <WrappedComponent {...(props as P)} apiClient={client} />;
    };
  };

export default withApiClient;
