import { gql } from "apollo-boost";

export const UPDATE_CARD_STATE = gql`
  mutation UpdateManyCards($data: CardUpdateManyMutationInput!, $boardId: CardWhereInput!) {
    updateManyCards(data: $data, where: $boardId) {
      count
    }
  }
`;