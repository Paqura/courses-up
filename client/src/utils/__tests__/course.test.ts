import { createCourse, getCourses, omitTemporaryFields } from '../course';
import { Course, CourseState, QueryCourse, CourseField } from '../../components/Courses/Courses.entities';

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

describe('getCourses', () => {
  it('should return the courses with Open status', () => {
    const courses: Course[] = [
      { id: '1', title: 'title1', description: 'd1', state: CourseState.Open },
      { id: '2', title: 'title2', description: 'd2', state: CourseState.Progress },
      { id: '3', title: 'title3', description: 'd3', state: CourseState.Progress },
    ];

    const actual = getCourses(courses)(CourseState.Open);

    const expected: Course[] = [{ id: '1', title: 'title1', description: 'd1', state: CourseState.Open }];

    expect(actual).toEqual(expected);
  });
});

describe('omitTemporaryFields', () => {
  it('should return course without field from fn arg', () => {
    const course: QueryCourse = { id: '1', title: 'title1', description: 'd1', state: CourseState.Open, __typename: 'Course' };

    const actual = omitTemporaryFields(course, [CourseField.id]);

    const expected = { title: 'title1', description: 'd1', state: CourseState.Open,  __typename: 'Course' };

    expect(actual).toEqual(expected)
  });
});
