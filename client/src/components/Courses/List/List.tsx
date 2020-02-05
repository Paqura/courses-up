import React from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Item } from '../Item';
import { CourseList, Title, Header } from './List.styled';

interface Props {
  changeStatus(id: string, status: CourseStatus): void;
  items: Course[];
  remove(id: string): void;
  title: string;
}

const List: React.FC<Props> = ({ changeStatus, items, remove, title }) => {
  const status = title.toLowerCase();

  return (
    <CourseList>
      <Header status={status}>
        <Title>{title}</Title>
      </Header>

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
