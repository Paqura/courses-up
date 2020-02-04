import React from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Item } from '../Item';
import { CourseList, Title } from './List.styled';

interface Props {
  changeStatus(id: string, status: CourseStatus): void;
  items: Course[];
  remove(id: string): void;
  title: string;
}

const List: React.FC<Props> = ({ changeStatus, items, remove, title }) => {
  return (
    <CourseList>
      <header>
        <Title>{title}</Title>
      </header>
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
