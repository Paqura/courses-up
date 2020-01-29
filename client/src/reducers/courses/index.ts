import { createReducer } from "@reduxjs/toolkit";
import { Course } from "../../components/Courses/Courses.entities";
import { addCourse, deleteCourse } from "../../actions/courses";
import { rejectCourseById } from "./utils";

export interface CourseState {
  list: Course[];
}

const initialState: CourseState = {
  list: [],
};

export const coursesReducer = createReducer(initialState, {
  [addCourse.type]: (state, action) => {
    state.list.push(action.payload.course);
  },

  [deleteCourse.type]: (state, action) => ({
    list: rejectCourseById(state.list, action.payload.id),
  }),
});