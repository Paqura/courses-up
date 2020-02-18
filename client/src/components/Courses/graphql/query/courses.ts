import gql from 'graphql-tag';

export const GET_COURSES = gql`
  query Courses($data: CourseWhereInput!) {
    courses(where: $data) {
      id
      title
      description
      state
    }
  }
`;