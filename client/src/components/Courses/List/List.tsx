import React from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Item } from '../Item';
import { CourseList } from './List.styled';

interface Props {
  changeStatus(id: string, status: CourseStatus): void;
  remove(id: string): void;
  items: Course[];
}

const List: React.FC<Props> = ({ changeStatus, items, remove }) => {
  return (
    <CourseList>
      {items.length > 0 && items.map(item => (
        <Item
          key={item.id}
          item={item}
          remove={remove}
          changeStatus={changeStatus}
        />
      ))}
    </CourseList>
  );
};

export default List;
