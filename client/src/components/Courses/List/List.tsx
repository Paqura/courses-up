import React from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Item } from '../Item';

interface Props {
  changeStatus(id: string, status: CourseStatus): void;
  remove(id: string): void;
  items: Course[];
}

const List: React.FC<Props> = ({ changeStatus, items, remove }) => {
  return (
    <ul>
      {items.length > 0 && items.map(item => (
        <Item 
          key={item.id} 
          item={item} 
          remove={remove} 
          changeStatus={changeStatus} 
        />
      ))}
    </ul>
  );
};

export default List;
