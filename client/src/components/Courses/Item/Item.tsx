import React from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Button } from '../../shared/Button';
import { Status } from './Item.styled';

interface Props {
  changeStatus(id: string, status: CourseStatus): void;
  remove(id: string): void;
  item: Course;
}

const Item: React.FC<Props> = ({ remove, item, changeStatus }) => {
  const onDelete = () => {
    remove(item.id);
  };

  const onChangeStatus = () => {
    changeStatus(item.id, CourseStatus.Progress);
  };

  return (
    <li>
      {item.title}

      <Status
        className={item.status}
        status={item.status}
      >
        status: {item.status}
      </Status>

      <Button text="Delete" onClick={onDelete} />
      <Button data-id="change" text="Change Status" onClick={onChangeStatus} />
    </li>
  );
}

export default Item;
