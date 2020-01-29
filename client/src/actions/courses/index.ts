import { createAction } from "@reduxjs/toolkit";
import { Course } from "../../components/Courses/Courses.entities";

export const PREFIX = '@courses';

export const addCourse = createAction(`${PREFIX}/ADD`, (course: Course) => ({
  payload: { course },
}));

export const deleteCourse = createAction(`${PREFIX}/DELETE`, (id: string) => ({
  payload: { id },
}));

type AddCourse = typeof addCourse;
type DeleteCourse = typeof deleteCourse;

export type CourseAction = AddCourse & DeleteCourse;