import { gql } from "apollo-boost";

export const DELETE_COURSE = gql`
  mutation DeleteCourse($id: CourseWhereUniqueInput!) {
    deleteCourse(where: $id) {
      id
      __typename
    }
  }
`;