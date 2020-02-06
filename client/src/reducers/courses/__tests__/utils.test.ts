import { rejectCourseById } from '../utils';
import { Course, CourseStatus } from '../../../components/Courses/Courses.entities';

describe('rejectCourseById', () => {
  it('should reject element by id', () => {
    const fakeCourses: Course[] = [
      { id: '1', title: 't1', description: 'd1', status: CourseStatus.Open },
      { id: '2', title: 't2', description: 'd2', status: CourseStatus.Open },
    ];

    const actual = rejectCourseById(fakeCourses, '1');
    const expected: Course[] = [{ id: '2', title: 't2', description: 'd2', status: CourseStatus.Open }];
    expect(actual).toEqual(expected)
  });
})