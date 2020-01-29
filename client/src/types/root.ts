import { AddCourse } from "../actions/courses";
import { CourseState } from "../reducers/courses";

export type RootAction = AddCourse;

export type RootState = {
  courses: CourseState;
};