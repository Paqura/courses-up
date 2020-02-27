import { QueryOptions } from 'react-apollo';

export const getQueryOptions = <T>(variables: T): Omit<QueryOptions, 'query'> => ({
  variables,
  fetchPolicy: 'no-cache',
});