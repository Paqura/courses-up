import { RootState } from "../types/root";

export const getCourses = (state: RootState) => state.courses;
export const getCoursesList = (state: RootState) => getCourses(state).list;