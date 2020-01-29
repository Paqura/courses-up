import React from 'react';
import { Course } from '../Courses.entities';
import { Button } from '../../shared/Button';

interface Props {
  remove(id: string): void;
  item: Course;
}

const Item: React.FC<Props> = ({ remove, item }) => {
  const onDelete = () => {
    remove(item.id);
  };

  return (
    <li>
      {item.title}
      <Button text="Delete" onClick={onDelete} />
    </li>
  );
}

export default Item;
