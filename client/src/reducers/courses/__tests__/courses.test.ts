import { coursesReducer, initialState } from '../';
import { addCourse } from '../../../actions/courses';
import { CourseState } from '../../../components/Courses/Courses.entities';

describe('coursesReducer', () => {
  it('should increment the list length after each action', () => {
    const fakeCourse = { id: String(Math.random()*10), title: 't1', description: 'd1', state: CourseState.Open };
    const actualFirst = coursesReducer(initialState, addCourse(fakeCourse));

    expect(actualFirst.list.length).toEqual(1);

    const actualSecond = coursesReducer(actualFirst, addCourse(fakeCourse));

    expect(actualSecond.list.length).toEqual(2);
  });
})