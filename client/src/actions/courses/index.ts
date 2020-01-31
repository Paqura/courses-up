import { createAction } from "@reduxjs/toolkit";
import { Course, CourseStatus } from "../../components/Courses/Courses.entities";

export const PREFIX = '@courses';

export const addCourse = createAction(`${PREFIX}/ADD`, (course: Course) => ({
  payload: { course },
}));

export const deleteCourse = createAction(`${PREFIX}/DELETE`, (id: string) => ({
  payload: { id },
}));

export const changeStatus = createAction(`${PREFIX}/CHANGE`, (id: string, status: CourseStatus) => ({
  payload: { id, status },
}));

type AddCourse = typeof addCourse;
type DeleteCourse = typeof deleteCourse;
type ChangeStatus = typeof changeStatus;

export type CourseAction = AddCourse & DeleteCourse & ChangeStatus;