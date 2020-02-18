import gql from 'graphql-tag';

export const GET_ARCHIVE_COURSES = gql`
  query Courses($data: CourseWhereInput!) {
    courses(where: $data) {
      id
      title
      description
      state
    }
  }
`;