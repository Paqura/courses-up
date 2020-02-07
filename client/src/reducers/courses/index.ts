import { createReducer } from "@reduxjs/toolkit";
import { Course } from "../../components/Courses/Courses.entities";
import { addCourse, deleteCourse, changeStatus, changeTitle, changeDescription } from "../../actions/courses";
import { rejectCourseById, changeCourseStatus, changeCourseTitle, changeCourseDescription } from "./utils";

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

  [changeDescription.type]: (state, action) => ({
    list: changeCourseDescription(state.list, action.payload.id, action.payload.description),
  }),
});