import { createReducer } from "@reduxjs/toolkit";
import { Course, CourseStatus } from "../../components/Courses/Courses.entities";
import { addCourse, deleteCourse, changeStatus } from "../../actions/courses";
import { rejectCourseById } from "./utils";

export const changeCourseStatus = (courses: Course[], id: string, status: CourseStatus) => 
  courses.map(course => course.id === id ? { ...course, status } : course);

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
});