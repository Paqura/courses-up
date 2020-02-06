import { rejectCourseById, changeCourseStatus, changeCourseTitle } from '../utils';
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
});

describe('changeCourseStatus', () => {
  it('should change status of the received course', () => {
    const course: Course = { id: '1', title: 't1', description: 'd1', status: CourseStatus.Open };

    const actual: Course[] = changeCourseStatus([course], '1', CourseStatus.Progress);
    const expected: Course[] = [{ id: '1', title: 't1', description: 'd1', status: CourseStatus.Progress }];

    expect(actual).toEqual(expected);
  });
});

describe('changeCourseTitle', () => {
  it('should change title of the received course', () => {
    const course: Course = { id: '1', title: 't1', description: 'd1', status: CourseStatus.Open };
    const newTitle = 'updated title';

    const actual: Course[] = changeCourseTitle([course], '1', newTitle);
    const expected: Course[] = [{ id: '1', title: newTitle, description: 'd1', status: CourseStatus.Open }];

    expect(actual).toEqual(expected);
  });
});