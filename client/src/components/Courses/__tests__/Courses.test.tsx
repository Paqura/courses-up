import React from 'react';
import { Courses } from '../Courses';
import { shallow, ShallowWrapper } from 'enzyme'
import { Button } from '../../shared/Button';

describe('Courses', () => {
  let instance: ShallowWrapper;

  beforeEach(() => {
    instance = shallow(<Courses />);
  });

  test('should return length of courses', () => {
    expect(instance.find('li')).toHaveLength(2);
  });

  test('should return +1 length after click', () => {
    const button = instance.find(Button);
    button.simulate('click');

    expect(instance.find('li')).toHaveLength(3);
  });
});