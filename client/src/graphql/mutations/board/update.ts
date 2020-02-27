import { gql } from "apollo-boost";

export const UPDATE_BOARD = gql`
  mutation UpdateBoard($data: BoardUpdateInput!, $id: BoardWhereUniqueInput!) {
    updateBoard(data: $data, where: $id) {
      id
    }
  }
`;