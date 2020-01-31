import React from 'react';
import Item from '../Item';
import { shallow, ShallowWrapper } from 'enzyme';
import { Course, CourseStatus } from '../../Courses.entities';

const course: Course = {
  id: 'testId',
  title: 'test title',
  description: 'test description',
  status: CourseStatus.Open,
};

describe('Item', () => {
  let wrapper: ShallowWrapper | null = null;
  const cb = jest.fn();
  const changeCb = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Item
        key="testKey"
        item={course}
        remove={cb}
        changeStatus={changeCb}
      />
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('must have a class open by default', () => {
    expect(wrapper?.find('span').prop('className')).toEqual('open');
  });

  it('should change status after click to button', () => {
    const button = wrapper?.find('[data-id="change"]');
    button?.simulate('click');

    expect(changeCb).toBeCalledTimes(1);
  });
});
