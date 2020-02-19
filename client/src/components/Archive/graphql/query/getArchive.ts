import gql from 'graphql-tag';

export const GET_ARCHIVE_CARDS = gql`
  query Cards($data: CardWhereInput!) {
    cards(where: $data) {
      id
      title
      description
      state
    }
  }
`;