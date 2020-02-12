import { CourseState } from "../Courses.entities";

export const getStatusColor = (status: CourseState): string => ({
  [CourseState.Open]: '#c8c8c8',
  [CourseState.Progress]: 'blue',
  [CourseState.Done]: 'green',
})[status];