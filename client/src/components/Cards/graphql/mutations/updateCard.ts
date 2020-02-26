import { gql } from "apollo-boost";

export const UPDATE_CARD = gql`
  mutation UpdateCard($data: CardUpdateInput!, $id: CardWhereUniqueInput!) {
    updateCard(where: $id, data: $data) {
      id
      title
      description
      state
      boardId
      priority
      __typename
    }
  }
`;