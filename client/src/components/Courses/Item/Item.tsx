import React from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Button } from '../../shared/Button';
import { Controls, Status, CourseItem } from './Item.styled';

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
    <CourseItem>
      {item.title}

      <Status
        className={item.status}
        status={item.status}
      >
        status: {item.status}
      </Status>

      <Controls>
        <Button text="Delete" onClick={onDelete} />
        <Button data-id="change" text="Change Status" onClick={onChangeStatus} />
      </Controls>
    </CourseItem>
  );
}

export default Item;
