import React from 'react';
import { Card, CardActions } from '../Cards.entities';
import { Item } from '../Item';
import { CourseList, Title, Header } from './List.styled';

interface Props {
  actions: CardActions;
  items: Card[];
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
