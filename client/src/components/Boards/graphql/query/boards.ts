import { gql } from "apollo-boost";

export const GET_BOARDS = gql`
  query Boards {
    boards {
      uid
      name
    }
  }
`;