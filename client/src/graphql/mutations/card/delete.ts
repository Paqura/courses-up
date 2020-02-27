import { gql } from "apollo-boost";

export const DELETE_CARD = gql`
  mutation DeleteCard($id: CardWhereUniqueInput!) {
    deleteCard(where: $id) {
      id
      __typename
    }
  }
`;