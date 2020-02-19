import { QueryOptions } from "react-apollo";
import { CardState } from "../Cards/Cards.entities";

export const queryOptions: Omit<QueryOptions, 'query'> = {
  variables: {
    data: {
      state: CardState.Archive,
    },
  },

  fetchPolicy: 'no-cache',
};