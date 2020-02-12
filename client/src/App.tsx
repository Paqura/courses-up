import React from 'react';
import { Courses } from './components/Courses';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck6jaw7u4jjga01d7cwgcaqhs/master',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Courses />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
