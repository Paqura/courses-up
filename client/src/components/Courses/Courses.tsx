import React, { useRef } from 'react';
import { CourseState } from './Courses.entities';
import { connect } from 'react-redux';
import { changeStatus, changeDescription, changeTitle } from '../../actions/courses';
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

export interface CourseActions {
  changeStatus: typeof changeStatus;
  changeDescription: typeof changeDescription;
  changeTitle: typeof changeTitle;
  // !TODO вкурить какие типы указывать
  deleteCourse: any;
}

interface Props {
  changeStatus: typeof changeStatus;
  changeDescription: typeof changeDescription;
  changeTitle: typeof changeTitle;
}

const STATUSES = [CourseState.Open, CourseState.Progress, CourseState.Done];

const Courses: React.FC<Props> = ({
  changeStatus,
  changeTitle,
  changeDescription,
}) => {
  const { loading, error, data } = useQuery(GET_COURSES);
  const [addCourseMutation] = useMutation(ADD_COURSE);
  const [deleteCourseMutation] = useMutation(DELETE_COURSE);

  const inputRef = useRef<HTMLInputElement>(null);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const { courses } = data;

  const add = () => {
    const value = inputRef.current?.value ?? null;

    if (value) {
      const course = createCourse(value, uuid());

      addCourseMutation({
        variables: {
          data: omitTemporaryFields(course, ['id'])
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

  const getCoursesByStatus = getCourses(courses);

  const actions: CourseActions = { changeStatus, changeTitle, changeDescription, deleteCourse };

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

const mapDispatchToProps = ({
  changeStatus,
  changeTitle,
  changeDescription,
});

export default connect(null, mapDispatchToProps)(Courses);
