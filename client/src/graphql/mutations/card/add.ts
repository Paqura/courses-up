import gql from 'graphql-tag';

export const ADD_CARD = gql`
  mutation CreateCard($data: CardCreateInput!) {
    createCard(data: $data) {
      id
    }
  }
`;
