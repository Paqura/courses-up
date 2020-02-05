import React, { useState, MouseEvent } from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Controls, CourseItem } from './Item.styled';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  changeStatus(id: string, status: CourseStatus): void;
  remove(id: string): void;
  item: Course;
}

const Item: React.FC<Props> = ({ remove, item, changeStatus }) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const onDelete = () => {
    remove(item.id);
  };

  const toggleDropdown = (evt: MouseEvent<HTMLButtonElement>) => {
    setIsDropdownShown(!isDropdownShown);
    setAnchorEl(evt.currentTarget);
  };

  const onChangeStatus = (status: CourseStatus) => {
    changeStatus(item.id, status);
    setIsDropdownShown(false);
  };

  const MENU_ITEMS = [
    { id: '1', title: CourseStatus.Open, action: () => onChangeStatus(CourseStatus.Open) },
    { id: '2', title: CourseStatus.Progress, action: () => onChangeStatus(CourseStatus.Progress) },
    { id: '3', title: CourseStatus.Done, action: () => onChangeStatus(CourseStatus.Done) },
  ].filter(it => it.title !== item.status);

  return (
    <CourseItem>
      {item.title}

      <Controls>
        <Button onClick={onDelete} color="secondary" variant="outlined" size="small">Delete</Button>
        <Button onClick={toggleDropdown} variant="outlined" size="small" style={{ marginLeft: '16px' }}>Status</Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={isDropdownShown}
          onClose={toggleDropdown}
        >
          {MENU_ITEMS.map(item => (
            <MenuItem key={item.id} onClick={item.action}>{item.title}</MenuItem>
          ))}
        </Menu>
      </Controls>
    </CourseItem>
  );
}

export default Item;
