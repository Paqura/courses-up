export enum CourseState {
  Open = 'Open',
  Progress = 'Progress',
  Done = 'Done',
}

export enum CourseField {
  id ='id',
  title = 'title',
  description = 'description',
  state = 'state',
}

export interface Course {
  [CourseField.id]: string;
  [CourseField.title]: string;
  [CourseField.description]: string;
  [CourseField.state]: CourseState;
}
