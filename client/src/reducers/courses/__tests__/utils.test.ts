import { rejectCourseById, changeCourseStatus, changeCourseTitle } from '../utils';
import { Course, CourseState } from '../../../components/Courses/Courses.entities';

describe('rejectCourseById', () => {
  it('should reject element by id', () => {
    const fakeCourses: Course[] = [
      { id: '1', title: 't1', description: 'd1', state: CourseState.Open },
      { id: '2', title: 't2', description: 'd2', state: CourseState.Open },
    ];

    const actual = rejectCourseById(fakeCourses, '1');
    const expected: Course[] = [{ id: '2', title: 't2', description: 'd2', state: CourseState.Open }];
    expect(actual).toEqual(expected)
  });
});

describe('changeCourseStatus', () => {
  it('should change status of the received course', () => {
    const course: Course = { id: '1', title: 't1', description: 'd1', state: CourseState.Open };

    const actual: Course[] = changeCourseStatus([course], '1', CourseState.Progress);
    const expected: Course[] = [{ id: '1', title: 't1', description: 'd1', state: CourseState.Progress }];

    expect(actual).toEqual(expected);
  });
});

describe('changeCourseTitle', () => {
  it('should change title of the received course', () => {
    const course: Course = { id: '1', title: 't1', description: 'd1', state: CourseState.Open };
    const newTitle = 'updated title';

    const actual: Course[] = changeCourseTitle([course], '1', newTitle);
    const expected: Course[] = [{ id: '1', title: newTitle, description: 'd1', state: CourseState.Open }];

    expect(actual).toEqual(expected);
  });
});