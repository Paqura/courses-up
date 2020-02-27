import React from 'react';
import { Card, CardActions } from '../Cards.entities';
import { Item } from '../Item';
import { Wrapper, Title, Header } from './Column.styled';

interface Props {
  actions: CardActions;
  items: Card[];
  title: string;
}

const Column: React.FC<Props> = ({ actions, items, title }) => (
  <Wrapper>
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
  </Wrapper>
);

export default Column;
