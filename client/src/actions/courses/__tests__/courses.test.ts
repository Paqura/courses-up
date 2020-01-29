import { addCourse, deleteCourse } from '../';

describe('addCourse', () => {
  it('should return correct payload', () => {
    const action = addCourse({ id: '1', title: 'test 1', description: 'descr test' });
    expect(action.payload).toEqual({ course: { id: '1', title: 'test 1', description: 'descr test' } });
  });
});

describe('deleteCourse', () => {
  it('should return correct payload', () => {
    const action = deleteCourse('1');
    expect(action.payload).toEqual({ id: '1' });
  });
});
