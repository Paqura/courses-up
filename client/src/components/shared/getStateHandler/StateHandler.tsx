import React from 'react';
import { ApolloError } from 'apollo-boost';

interface StateContoller {
  loading: boolean;
  error?: ApolloError;
}

export default ({ loading, error }: StateContoller) => {
  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return null;
};
