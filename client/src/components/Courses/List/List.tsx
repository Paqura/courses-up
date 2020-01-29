import React from 'react';
import { Course } from '../Courses.entities';
import { Item } from '../Item';

interface Props {
  remove(id: string): void;
  items: Course[];
}

const List: React.FC<Props> = ({ items, remove }) => {
  return (
    <ul>
      {items.length > 0 && items.map(item => (
        <Item key={item.id} item={item} remove={remove} />
      ))}
    </ul>
  );
};

export default List;
