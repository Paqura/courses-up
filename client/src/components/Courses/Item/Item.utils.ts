import { CourseStatus } from "../Courses.entities";

export const getStatusColor = (status: CourseStatus): string => ({
  [CourseStatus.Open]: '#c8c8c8',
  [CourseStatus.Progress]: 'blue',
  [CourseStatus.Done]: 'green',
})[status];