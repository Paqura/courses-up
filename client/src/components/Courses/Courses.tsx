import React, { useState } from 'react';
import { Course } from './Courses.entities';
import { Button } from '../shared/Button';
import { connect } from 'react-redux';

const Courses: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', title: 'title 1', description: 'test description' },
    { id: '2', title: 'title 2', description: 'test description 2' },
  ]);

  const addCourse = () => {
    setCourses([...courses, { id: '3', title: 'title 3', description: 'new course' }]);
  };

  console.log(props);

  return (
    <ul>
      {courses.length > 0 && courses.map(course => <li key={course.id}>{course.title}</li>)}
      <Button text="Click me" onClick={addCourse} />
    </ul>
  )
};

const mapStateToProps = (state: { counter: { count: number } }) => {
  return {
    count: state.counter.count,
  };
};

export default connect(mapStateToProps)(Courses);

