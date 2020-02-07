import React, { useRef } from 'react';
import { Course, CourseStatus } from './Courses.entities';
import { connect } from 'react-redux';
import { addCourse, changeStatus, changeDescription, deleteCourse, changeTitle } from '../../actions/courses';
import { RootState } from '../../types/root';
import { List } from './List';
import uuid from 'uuid';
import { createCourse, getCourses } from '../../utils/course';
import { Table } from './Courses.styled';
import { capitalize } from '../../utils/capitalize';
import { Form } from '../shared/Form';
import { getCoursesList } from '../../selectors/coursesSelectors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

const STATUSES = [CourseStatus.Open, CourseStatus.Progress, CourseStatus.Done];

const Courses: React.FC<Props> = ({
  addCourse,
  changeStatus,
  changeTitle,
  changeDescription,
  courses,
  deleteCourse,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const add = () => {
    const value = inputRef.current?.value ?? null;

    if (value) {
      const course = createCourse(value, uuid());
      addCourse(course);

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
            title={capitalize(status)}
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
