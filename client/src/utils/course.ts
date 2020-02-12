import { Course, CourseState } from "../components/Courses/Courses.entities";

export const createCourse = (value: string, id: string): Course => ({
  id,
  title: value,
  description: '',
  state: CourseState.Open,
});

export const getCourses = (courses: Course[]) => (status: CourseState) =>
  courses.filter(course => course.state === status);

export const omitTemporaryFields = (course: Course, fields: (keyof Course)[]): Partial<Course> => {
  const clone = { ...course };

  for (const field of fields)  {
    delete clone[field];
  }

  return clone;
};