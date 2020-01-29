import React, { useRef } from 'react';
import { Course } from './Courses.entities';
import { Button } from '../shared/Button';
import { connect } from 'react-redux';
import { addCourse, deleteCourse } from '../../actions/courses';
import { RootState } from '../../types/root';
import { List } from './List';
import uuid from 'uuid';
import { createCourse } from '../../utils/course';

interface Props {
  addCourse: typeof addCourse;
  deleteCourse: typeof deleteCourse;
  courses: Course[];
}

const Courses: React.FC<Props> = ({ addCourse, deleteCourse, courses }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const add = () => {
    const value = inputRef.current?.value ?? null;

    if (value) {
      const course = createCourse(value, uuid());
      addCourse(course);

      inputRef.current!.value = '';
    }
  };

  return (
    <>
      <List items={courses} remove={deleteCourse} />

      <input ref={inputRef} type="text" placeholder="Enter a card title" />
      <Button onClick={add} text="Add card" />
    </>
  )
};

const mapStateToProps = (state: RootState) => ({
  courses: state.courses.list,
});

const mapDispatchToProps = ({
  addCourse,
  deleteCourse,
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);

