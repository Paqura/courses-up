import React, { useState } from 'react';
import { Course } from './Courses.entities';

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', title: 'title 1', description: 'test description' },
    { id: '2', title: 'title 2', description: 'test description 2' },
  ]);

  return (
    <ul>
      {courses.length > 0 && courses.map(course => <li key={course.id}>{course.title}</li>)}
    </ul>
  )
};

export { Courses };
