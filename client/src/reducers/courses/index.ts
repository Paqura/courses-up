import { createReducer } from "@reduxjs/toolkit";
import { Course } from "../../components/Courses/Courses.entities";
import { addCourse } from "../../actions/courses";

export interface CourseState {
  list: Course[];
}

const initialState: CourseState = {
  list: [],
};

export const coursesReducer = createReducer(initialState, {
  [addCourse.type]: (state, action) => {
    state.list.push(action.payload.course);
  }
});