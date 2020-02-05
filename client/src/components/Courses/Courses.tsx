import React, { useRef } from 'react';
import { Course, CourseStatus } from './Courses.entities';
import { Button } from '../shared/Button';
import { connect } from 'react-redux';
import { addCourse, changeStatus, deleteCourse } from '../../actions/courses';
import { RootState } from '../../types/root';
import { List } from './List';
import uuid from 'uuid';
import { createCourse, getCourses } from '../../utils/course';
import { Table } from './Courses.styled';
import { capitalize } from '../../utils/capitalize';
import { Form, Field } from '../shared/Form';
import { getCoursesList } from '../../selectors/coursesSelectors';

interface Props {
  addCourse: typeof addCourse;
  changeStatus: typeof changeStatus;
  deleteCourse: typeof deleteCourse;
  courses: Course[];
}

const STATUSES = [CourseStatus.Open, CourseStatus.Progress, CourseStatus.Done];

const Courses: React.FC<Props> = ({ addCourse, deleteCourse, courses, changeStatus }) => {
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

  return (
    <>
      <Form>
        <Field ref={inputRef} placeholder="Enter a card title" />
        <Button onClick={add} text="Add card" />
      </Form>

      <Table>
        {STATUSES.map(status => (
          <List
            title={capitalize(status)}
            items={getCoursesByStatus(status)}
            remove={deleteCourse}
            changeStatus={changeStatus}
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
  deleteCourse,
  changeStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
