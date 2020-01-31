import { Course, CourseStatus } from "../components/Courses/Courses.entities";

export const createCourse = (value: string, id: string): Course => ({
  id,
  title: value,
  description: `${value}-${id}`,
  status: CourseStatus.Open,
});