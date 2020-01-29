import { combineReducers } from 'redux';


import { createAction, createReducer } from '@reduxjs/toolkit';
import { Course } from '../components/Courses/Courses.entities';

export const addCourse = createAction('@courses/ADD', (course: Course) => ({
  payload: { course },
}));

interface CourseState {
  courses: Course[];
}

const initialState: CourseState = {
  courses: [],
};

const coursesReducer = createReducer(initialState, {
  [addCourse.type]: (state, action) => {
    state.courses.push(action.payload.course);
  }
});


export default combineReducers({
  courses: coursesReducer,
});
