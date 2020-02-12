import React from 'react';
import { Course } from '../Courses.entities';
import { Item } from '../Item';
import { CourseList, Title, Header } from './List.styled';
import { CourseActions } from '../Courses';

interface Props {
  actions: CourseActions;
  items: Course[];
  title: string;
}

const List: React.FC<Props> = ({ actions, items, title }) => {

  return (
    <CourseList>
      <Header status={title}>
        <Title>{title}</Title>
      </Header>

      {items.length > 0 && items.map(item => (
        <Item
          key={item.id}
          item={item}
          actions={actions}
        />
      ))}
    </CourseList>
  );
};

export default List;
