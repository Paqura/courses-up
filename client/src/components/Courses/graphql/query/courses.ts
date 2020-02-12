import gql from 'graphql-tag';

export const GET_COURSES = gql`
  query Courses {
    courses {
      id
      title
      description
      state
    }
  }
`;