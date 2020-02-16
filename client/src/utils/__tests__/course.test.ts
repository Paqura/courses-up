import { createCourse } from '../course';
import { Course, CourseState } from '../../components/Courses/Courses.entities';

describe('createCourse', () => {
  it('should create a course with received title', () => {
    const courseData = {
      id: 'testId',
      title: 'new title',
    };

    const actual = createCourse(courseData.title, courseData.id);

    const expected: Course = {
      id: courseData.id,
      title: courseData.title,
      description: '',
      state: CourseState.Open,
    };

    expect(actual).toEqual(expected);
  });
});
