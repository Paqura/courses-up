import gql from 'graphql-tag';

export const ADD_COURSE = gql`
  mutation CreateCourse($data: CourseCreateInput!) {
    createCourse(data: $data) {
      id
    }
  }
`;
