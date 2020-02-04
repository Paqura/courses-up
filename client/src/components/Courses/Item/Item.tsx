import React, { useState } from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Button } from '../../shared/Button';
import { Controls, Status, CourseItem } from './Item.styled';
import { Dropdown } from '../../shared/Dropdown';

interface Props {
  changeStatus(id: string, status: CourseStatus): void;
  remove(id: string): void;
  item: Course;
}

const Item: React.FC<Props> = ({ remove, item, changeStatus }) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const onDelete = () => {
    remove(item.id);
  };

  const toggleDropdown = () => {
    setIsDropdownShown(!isDropdownShown);
  };

  const onChangeStatus = (status: CourseStatus) => {
    changeStatus(item.id, status);
    setIsDropdownShown(false);
  };

  const dropdownItems = [
    { id: '1', title: CourseStatus.Open, action: () => onChangeStatus(CourseStatus.Open) },
    { id: '2', title: CourseStatus.Progress, action: () => onChangeStatus(CourseStatus.Progress) },
    { id: '3', title: CourseStatus.Done, action: () => onChangeStatus(CourseStatus.Done) },
  ].filter(it => it.title !== item.status);

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
        <Button
          text="Delete"
          onClick={onDelete}
        />

        <Button
          data-id="change"
          text="Status"
          onClick={toggleDropdown}
        >
          {isDropdownShown && (
            <Dropdown
              items={dropdownItems}
            />
          )}
        </Button>


      </Controls>
    </CourseItem>
  );
}

export default Item;
