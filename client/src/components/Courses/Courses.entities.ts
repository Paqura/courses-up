export enum CourseState {
  Archive = 'Archive',
  Done = 'Done',
  Open = 'Open',
  Progress = 'Progress',
}

export enum CourseField {
  id ='id',
  title = 'title',
  description = 'description',
  state = 'state',

  boardId = 'boardId',
}

export interface Course {
  [CourseField.id]: string;
  [CourseField.title]: string;
  [CourseField.description]: string;
  [CourseField.state]: CourseState;
  [CourseField.boardId]: string;
}

export interface CourseActions {
  deleteCourse(id: string): void;
  updateCourse(id: string, updatedData: Partial<FullUpdateMutationData>): void;
}

export type QueryCourse = Course & { __typename: string };

export interface CoursesQuery {
  courses: QueryCourse[];
}

export interface FullUpdateMutationData {
  [CourseField.description]: string;
  [CourseField.id]: string;
  [CourseField.state]: CourseState;
  [CourseField.title]: string;
  [CourseField.boardId]: string;
}
