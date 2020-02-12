export enum CourseState {
  Open = 'Open',
  Progress = 'Progress',
  Done = 'Done',
}

export interface Course {
  id: string;
  title: string;
  description: string;
  state: CourseState;
}
