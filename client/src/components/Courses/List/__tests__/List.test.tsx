import React from 'react';
import List from '../List';
import { mount } from 'enzyme';
import { Course, CourseStatus } from '../../Courses.entities';

describe('List', () => {
  it('should return correct length of `items`', () => {
    const cb = jest.fn();

    const items: Course[] = [
      { id: '1', title: 't1', description: 'd1', status: CourseStatus.Open },
      { id: '2', title: 't2', description: 'd2', status: CourseStatus.Open },
    ];

    const actions = {
      changeStatus: cb('courseId', CourseStatus.Progress),
      changeTitle: cb('courseId', 'new title'),
      deleteCourse: cb('courseId')
    };

    const wrapper = mount(
      <List
        items={items}
        title="List title"
        actions={actions}
      />
    );

    expect(wrapper.props().items).toHaveLength(2);
  });
});