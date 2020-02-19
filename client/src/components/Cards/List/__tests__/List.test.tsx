import React from 'react';
import List from '../List';
import { mount } from 'enzyme';
import { Course, CourseState, CourseActions } from '../../Cards.entities';

describe('List', () => {
  it('should return correct length of `items`', () => {
    const cb = jest.fn();

    const items: Course[] = [
      { id: '1', title: 't1', description: 'd1', state: CourseState.Open },
      { id: '2', title: 't2', description: 'd2', state: CourseState.Open },
    ];

    const actions: CourseActions = {
      updateCourse: cb('courseId', { title: 'updated' }),
      deleteCourse: cb('courseId'),
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