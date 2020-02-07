import { addCourse, deleteCourse } from '../';
import { CourseStatus } from '../../../components/Courses/Courses.entities';

describe('addCourse', () => {
  it('should return correct payload', () => {
    const action = addCourse({ id: '1', title: 'test 1', description: 'descr test', status: CourseStatus.Open });
    expect(action.payload).toEqual({ course: { id: '1', title: 'test 1', description: 'descr test', status: CourseStatus.Open } });
  });
});

describe('deleteCourse', () => {
  it('should return correct payload', () => {
    const action = deleteCourse('1');
    expect(action.payload).toEqual({ id: '1' });
  });
});
