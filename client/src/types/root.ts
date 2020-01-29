import { CourseAction } from "../actions/courses";
import { CourseState } from "../reducers/courses";

export type RootAction = CourseAction;

export type RootState = {
  courses: CourseState;
};