import { createReducer } from "@reduxjs/toolkit";
import { Course, CourseStatus } from "../../components/Courses/Courses.entities";
import { addCourse, deleteCourse, changeStatus, changeTitle } from "../../actions/courses";
import { rejectCourseById } from "./utils";

export const changeCourseStatus = (courses: Course[], id: string, status: CourseStatus) =>
  courses.map(course => course.id === id ? { ...course, status } : course);

export const changeCourseTitle = (courses: Course[], id: string, title: string) =>
  courses.map(course => course.id === id ? { ...course, title } : course);

export interface CourseState {
  list: Course[];
}

export const initialState: CourseState = {
  list: [],
};

export const coursesReducer = createReducer(initialState, {
  [addCourse.type]: (state, action) => {
    state.list.push(action.payload.course);
  },

  [deleteCourse.type]: (state, action) => ({
    list: rejectCourseById(state.list, action.payload.id),
  }),

  [changeStatus.type]: (state, action) => ({
    list: changeCourseStatus(state.list, action.payload.id, action.payload.status),
  }),

  [changeTitle.type]: (state, action) => ({
    list: changeCourseTitle(state.list, action.payload.id, action.payload.title),
  }),
});