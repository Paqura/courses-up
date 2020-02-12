import { createAction } from "@reduxjs/toolkit";
import { Course, CourseState } from "../../components/Courses/Courses.entities";

export const PREFIX = '@courses';

export const addCourse = createAction(`${PREFIX}/ADD`, (course: Course) => ({
  payload: { course },
}));

export const deleteCourse = createAction(`${PREFIX}/DELETE`, (id: string) => ({
  payload: { id },
}));

export const changeStatus = createAction(`${PREFIX}/CHANGE_STATUS`, (id: string, status: CourseState) => ({
  payload: { id, status },
}));

export const changeTitle = createAction(`${PREFIX}/CHANGE_TITLE`, (id: string, title: string) => ({
  payload: { id, title },
}));

export const changeDescription = createAction(`${PREFIX}/CHANGE_DESCRIPTION`, (id: string, description: string) => ({
  payload: { id, description },
}));

type AddCourse = typeof addCourse;
type DeleteCourse = typeof deleteCourse;
type ChangeStatus = typeof changeStatus;
type ChangeTitle = typeof changeTitle;
type ChangeDescription = typeof changeDescription;

export type CourseAction =
  AddCourse &
  DeleteCourse &
  ChangeStatus &
  ChangeTitle &
  ChangeDescription;