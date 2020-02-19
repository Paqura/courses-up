import React from 'react';
import List from '../List';
import { mount } from 'enzyme';
import { Card, CardState, CardActions } from '../../Cards.entities';

describe('List', () => {
  it('should return correct length of `items`', () => {
    const cb = jest.fn();

    const items: Card[] = [
      { id: '1', title: 't1', description: 'd1', state: CardState.Open, boardId: '1' },
      { id: '2', title: 't2', description: 'd2', state: CardState.Open, boardId: '1' },
    ];

    const actions: CardActions = {
      updateCard: cb('courseId', { title: 'updated' }),
      deleteCard: cb('courseId'),
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