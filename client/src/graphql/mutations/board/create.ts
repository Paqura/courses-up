import { gql } from "apollo-boost";

export const CREATE_BOARD = gql`
  mutation CreateBoard($data: BoardCreateInput!) {
    createBoard(data: $data) {
      uid
      name
    }
  }
`;