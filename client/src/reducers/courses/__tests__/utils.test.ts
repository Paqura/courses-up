import { rejectCourseById } from '../utils';
import { Course } from '../../../components/Courses/Courses.entities';

describe('rejectCourseById', () => {
  it('should reject element by id', () => {
    const fakeCourses: Course[] = [
      { id: '1', title: 't1', description: 'd1' },
      { id: '2', title: 't2', description: 'd2' },
    ];

    const actual = rejectCourseById(fakeCourses, '1');
    const expected = [{ id: '2', title: 't2', description: 'd2' }];
    expect(actual).toEqual(expected)
  });
})