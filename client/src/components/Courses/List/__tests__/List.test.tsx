import React from 'react';
import List from '../List';
import { mount } from 'enzyme';
import { Course } from '../../Courses.entities';
import { Item } from '../../Item';

describe('List', () => {
  it('should return correct length of `items`', () => {
    const cb = jest.fn();
  
    const items: Course[] = [
      { id: '1', title: 't1', description: 'd1' },
      { id: '2', title: 't2', description: 'd2' },
    ];

    const wrapper = mount(
      <List
        items={items}
        remove={cb}
      />
    );

    expect(wrapper.props().items).toHaveLength(2);
  });
});