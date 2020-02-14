import React, { useRef } from 'react';
import { CourseState, Course, CourseField } from './Courses.entities';
import { List } from './List';
import uuid from 'uuid';
import { createCourse, getCourses, omitTemporaryFields } from '../../utils/course';
import { Table } from './Courses.styled';
import { Form } from '../shared/Form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_COURSE } from './graphql/mutations/addCourse';
import { GET_COURSES } from './graphql/query/courses';
import { DELETE_COURSE } from './graphql/mutations/deleteCourse';
import { UPDATE_COURSE } from './graphql/mutations/updateCourse';

export interface CourseActions {
  // !TODO вкурить какие типы указывать
  updateCourse: any;
  deleteCourse: any;
}

interface Props {}

type QueryCourse = Course & { __typename: string };

interface CoursesQuery {
  courses: QueryCourse[];
}

export interface FullUpdateMutationData {
  [CourseField.description]: string;
  [CourseField.id]: string;
  [CourseField.state]: CourseState;
  [CourseField.title]: string;
}

const STATUSES = [CourseState.Open, CourseState.Progress, CourseState.Done];

const Courses: React.FC<Props> = () => {
  const { loading, error, data } = useQuery<CoursesQuery>(GET_COURSES);
  const [addCourseMutation] = useMutation(ADD_COURSE);
  const [deleteCourseMutation] = useMutation(DELETE_COURSE);
  const [updateCourseMutation] = useMutation(UPDATE_COURSE);

  const inputRef = useRef<HTMLInputElement>(null);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const { courses } = data!;

  const add = () => {
    const value = inputRef.current?.value ?? null;

    if (value) {
      const course = createCourse(value, uuid());

      addCourseMutation({
        variables: {
          data: omitTemporaryFields(course, [CourseField.id])
        },

        refetchQueries: ['Courses'],
      });

      inputRef.current!.value = '';
    }
  };

  const deleteCourse = (id: string) => {
    deleteCourseMutation({
      variables: {
        id: { id },
      },

      refetchQueries: ['Courses'],
    })
  };

  const updateCourse = (id: string, updatedData: Partial<FullUpdateMutationData>) => {
    const course = courses.find(course => course.id === id);

    if (!course) {
      return;
    }

    const { id: ID, __typename, ...rest } = course;

    const data = {
      ...rest,
      ...updatedData,
    }

    updateCourseMutation({
      variables: {
        id: { id },
        data,
      },
      refetchQueries: ['Courses'],
    })
  };

  const getCoursesByStatus = getCourses(courses);

  const actions: CourseActions = { updateCourse, deleteCourse };

  return (
    <>
      <Form>
        <TextField inputRef={inputRef} label="Enter a card title" />

        <Button
          onClick={add}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </Form>

      <Table>
        {STATUSES.map(status => (
          <List
            key={status}
            title={status}
            items={getCoursesByStatus(status)}
            actions={actions}
          />
        ))}
      </Table>
    </>
  )
};

export default Courses;
