import gql from 'graphql-tag';

export const GET_CARD = gql`
  query Card($id: CardWhereUniqueInput!) {
    card(where: $id) {
      id
      title
      description
      state
      boardId
      priority
    }
  }
`;