import { Course, CourseState } from "../components/Courses/Courses.entities";

export const createCourse = (value: string, id: string, boardId: string): Course => ({
  id,
  title: value,
  description: '',
  state: CourseState.Open,
  boardId,
});

export const getCourses = (courses: Course[]) => (state: CourseState) =>
  courses.filter(course => course.state === state);

export const omitTemporaryFields = (course: Course, fields: (keyof Course)[]): Partial<Course> => {
  const clone = { ...course };

  for (const field of fields)  {
    delete clone[field];
  }

  return clone;
};