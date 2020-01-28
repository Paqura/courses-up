import React, { useState } from 'react';
import { Course } from './Courses.entities';
import { Button } from '../shared/Button';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', title: 'title 1', description: 'test description' },
    { id: '2', title: 'title 2', description: 'test description 2' },
  ]);

  const addCourse = () => {
    setCourses([...courses, { id: '3', title: 'title 3', description: 'new course' }]);
  };

  return (
    <ul>
      {courses.length > 0 && courses.map(course => <li key={course.id}>{course.title}</li>)}
      <Button text="Click me" onClick={addCourse} />
    </ul>
  )
};

export { Courses };
