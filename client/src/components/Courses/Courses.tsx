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

interface Props {
  addCourse: typeof addCourse;
  changeStatus: typeof changeStatus;
  deleteCourse: typeof deleteCourse;
  courses: Course[];
}

const Courses: React.FC<Props> = ({ addCourse, deleteCourse, courses, changeStatus }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (evt: any) => {
    evt.preventDefault();
  };

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
      <form onSubmit={submit}>
        <input ref={inputRef} type="text" placeholder="Enter a card title" />
        <Button onClick={add} text="Add card" />
      </form>

      <Table>
        <List
          title={capitalize(CourseStatus.Open)}
          items={getCoursesByStatus(CourseStatus.Open)}
          remove={deleteCourse}
          changeStatus={changeStatus}
        />

        <List
          title={capitalize(CourseStatus.Progress)}
          items={getCoursesByStatus(CourseStatus.Progress)}
          remove={deleteCourse}
          changeStatus={changeStatus}
        />

        <List
          title={capitalize(CourseStatus.Done)}
          items={getCoursesByStatus(CourseStatus.Done)}
          remove={deleteCourse}
          changeStatus={changeStatus}
        />
      </Table>
    </>
  )
};

const mapStateToProps = (state: RootState) => ({
  courses: state.courses.list,
});

const mapDispatchToProps = ({
  addCourse,
  deleteCourse,
  changeStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
