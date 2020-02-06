import { Course, CourseStatus } from "../components/Courses/Courses.entities";

export const createCourse = (value: string, id: string): Course => ({
  id,
  title: value,
  description: '',
  status: CourseStatus.Open,
});

export const getCourses = (courses: Course[]) => (status: CourseStatus) =>
  courses.filter(course => course.status === status);