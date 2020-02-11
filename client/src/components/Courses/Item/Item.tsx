import React, { useState, useRef, SyntheticEvent } from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Controls, CourseItem } from './Item.styled';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { CourseActions } from '../Courses';
import { Description } from '../Description';
import { Title } from '../Title';

interface Props {
  actions: CourseActions;
  item: Course;
}

const Item: React.FC<Props> = ({
  actions: { changeStatus, changeTitle, changeDescription, deleteCourse },
  item
}) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = React.useRef<HTMLTextAreaElement>(null);

  const toggleDropdown = (evt: SyntheticEvent<HTMLButtonElement>) => {
    setIsDropdownShown(!isDropdownShown);
    setAnchorEl(evt.currentTarget);
  };

  const onDelete = () => {
    deleteCourse(item.id);
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
      <Title
        ref={titleInputRef}
        change={changeTitle}
        item={item}
      />

      <Description
        ref={descriptionInputRef}
        change={changeDescription}
        item={item}
      />

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
