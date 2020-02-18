import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_ARCHIVE_COURSES } from './graphql/query/getArchive';
import { CourseState, CoursesQuery } from '../Courses/Courses.entities';

const Archive = () => {
  const { loading, error, data } = useQuery<CoursesQuery>(GET_ARCHIVE_COURSES, {
    variables: {
      data: {
        state: CourseState.Archive,
      },
    },
  });

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const { courses } = data!;

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.title}
          <p>
            {course.description}
          </p>
        </li>
      ))}
    </ul>
  )
};

export default Archive;
