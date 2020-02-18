import { gql } from "apollo-boost";

export const UPDATE_COURSE = gql`
  mutation UpdateCourse($data: CourseUpdateInput!, $id: CourseWhereUniqueInput!) {
    updateCourse(where: $id, data: $data) {
      id
      title
      description
      state
      __typename
    }
  }
`;