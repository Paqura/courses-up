import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Pages from './pages/root';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck6jaw7u4jjga01d7cwgcaqhs/master',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Pages />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
