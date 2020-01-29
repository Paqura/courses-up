import React from 'react';
import { Course } from './Courses.entities';
import { Button } from '../shared/Button';
import { connect } from 'react-redux';
import { addCourse } from '../../actions/courses';
import { RootState } from '../../types/root';

interface Props {
  addCourse: typeof addCourse;
  courses: Course[];
}

const Courses: React.FC<Props> = ({ addCourse, courses }) => {
  const add = () => {
    addCourse({ id: '1', title: 'test1', description: 'fsdfdsfsdf' });
  };

  return (
    <ul>
      {courses.length > 0 && courses.map(course => <li key={course.id}>{course.title}</li>)}
      <Button text="Click me" onClick={add} />
    </ul>
  )
};

const mapStateToProps = (state: RootState) => ({
  courses: state.courses.list,
});

const mapDispatchToProps = ({
  addCourse,
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);

