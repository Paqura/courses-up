export enum CourseStatus {
  Open = 'open',
  Progress = 'progress',
  Done = 'done',
}

export interface Course {
  id: string;
  title: string;
  description: string;
  status: CourseStatus;
}
