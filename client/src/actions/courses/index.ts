import { createAction } from "@reduxjs/toolkit";
import { Course } from "../../components/Courses/Courses.entities";

export const PREFIX = '@courses';

export const addCourse = createAction(`${PREFIX}/ADD`, (course: Course) => ({
  payload: { course },
}));

export type AddCourse = typeof addCourse;