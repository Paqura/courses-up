export enum CourseStatus {
  Open = 'open',
  Progress = 'progress',
  Done = 'done',
}

interface CourseMeta {
  dateCreated: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  status: CourseStatus;

  meta: CourseMeta;
}
