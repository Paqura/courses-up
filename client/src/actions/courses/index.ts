import { createAction } from "@reduxjs/toolkit";
import { Course, CourseStatus } from "../../components/Courses/Courses.entities";

export const PREFIX = '@courses';

export const addCourse = createAction(`${PREFIX}/ADD`, (course: Course) => ({
  payload: { course },
}));

export const deleteCourse = createAction(`${PREFIX}/DELETE`, (id: string) => ({
  payload: { id },
}));

export const changeStatus = createAction(`${PREFIX}/CHANGE_STATUS`, (id: string, status: CourseStatus) => ({
  payload: { id, status },
}));

export const changeTitle = createAction(`${PREFIX}/CHANGE_TITLE`, (id: string, title: string) => ({
  payload: { id, title },
}));

type AddCourse = typeof addCourse;
type DeleteCourse = typeof deleteCourse;
type ChangeStatus = typeof changeStatus;
type ChangeTitle = typeof changeTitle;

export type CourseAction =
  AddCourse &
  DeleteCourse &
  ChangeStatus &
  ChangeTitle;