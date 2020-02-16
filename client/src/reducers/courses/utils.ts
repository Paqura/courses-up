import { Course, CourseState } from "../../components/Courses/Courses.entities";

export const rejectCourseById = (courses: Course[], id: string) => courses.filter(course => course.id !== id);

export const changeCourseStatus = (courses: Course[], id: string, state: CourseState) =>
  courses.map(course => course.id === id ? { ...course, state } : course);

export const changeCourseTitle = (courses: Course[], id: string, title: string) =>
  courses.map(course => course.id === id ? { ...course, title } : course);

export const changeCourseDescription = (courses: Course[], id: string, description: string) =>
  courses.map(course => course.id === id ? { ...course, description } : course);