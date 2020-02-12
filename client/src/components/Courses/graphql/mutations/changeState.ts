import { gql } from "apollo-boost";

export const CHANGE_STATE = gql`
  mutation UpdateState($data: CourseUpdateInput!, $id: CourseWhereUniqueInput!) {
    updateCourse(where: $id, data: $data) {
      id
    }
  }
`;