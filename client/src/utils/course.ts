import { Course, CourseStatus } from "../components/Courses/Courses.entities";
import date from 'dayjs';

export const createCourse = (value: string, id: string): Course => ({
  id,
  title: value,
  description: '',
  status: CourseStatus.Open,

  meta: {
    dateCreated: date().format(),
  }
});

export const getCourses = (courses: Course[]) => (status: CourseStatus) =>
  courses.filter(course => course.status === status);