import React, { useRef } from 'react';
import { Course, CourseState } from './Courses.entities';
import { connect } from 'react-redux';
import { addCourse, changeStatus, changeDescription, deleteCourse, changeTitle } from '../../actions/courses';
import { RootState } from '../../types/root';
import { List } from './List';
import uuid from 'uuid';
import { createCourse, getCourses, omitTemporaryFields } from '../../utils/course';
import { Table } from './Courses.styled';
import { Form } from '../shared/Form';
import { getCoursesList } from '../../selectors/coursesSelectors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_COURSE = gql`
  mutation CreateCourse($data: CourseCreateInput!) {
    createCourse(data: $data) {
      id
    }
  }
`;

export interface CourseActions {
  changeStatus: typeof changeStatus;
  changeDescription: typeof changeDescription;
  changeTitle: typeof changeTitle;
  deleteCourse: typeof deleteCourse;
}

interface Props {
  addCourse: typeof addCourse;
  changeStatus: typeof changeStatus;
  changeDescription: typeof changeDescription;
  changeTitle: typeof changeTitle;
  deleteCourse: typeof deleteCourse;

  courses: Course[];
}

const STATUSES = [CourseState.Open, CourseState.Progress, CourseState.Done];

const Courses: React.FC<Props> = ({
  addCourse,
  changeStatus,
  changeTitle,
  changeDescription,
  courses,
  deleteCourse,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [addCourseMutation] = useMutation(ADD_COURSE);

  const add = () => {
    const value = inputRef.current?.value ?? null;

    if (value) {
      const course = createCourse(value, uuid());
      addCourse(course);

      addCourseMutation({
        variables: {
          data: omitTemporaryFields(course, ['id'])
        },
      });

      inputRef.current!.value = '';
    }
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

const mapStateToProps = (state: RootState) => ({
  courses: getCoursesList(state),
});

const mapDispatchToProps = ({
  addCourse,
  changeStatus,
  changeTitle,
  changeDescription,
  deleteCourse,
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
