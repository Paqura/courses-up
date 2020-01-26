import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';

@Injectable()
export class AppService {
  private courses: Course[] = [];

  getCourses(): Course[] {
    return this.courses;
  }

  add(course: Course) {
    this.courses.push(course);
    return this;
  }
}
