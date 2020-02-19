import { gql } from "apollo-boost";

export const DELETE_BOARD = gql`
  mutation DeleteBoard($id: BoardWhereUniqueInput!) {
    deleteBoard(where: $id) {
      name
    }
  }
`;