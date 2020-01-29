import { Course } from "../../components/Courses/Courses.entities";

export const rejectCourseById = (courses: Course[], id: string) => courses.filter(course => course.id !== id);