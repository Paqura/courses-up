import React, { useState, useRef, SyntheticEvent } from 'react';
import { Course, CourseState, CourseActions } from '../Courses.entities';
import { Controls, CourseItem } from './Item.styled';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Description } from '../Description';
import { Title } from '../Title';
import { AlertDialog } from '../AlertDialog';

interface Props {
  actions: CourseActions;
  item: Course;
}

const Item: React.FC<Props> = ({
  actions: { updateCourse, deleteCourse },
  item
}) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = React.useRef<HTMLTextAreaElement>(null);

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const toggleAlert = () => {
    setIsAlertOpen(!isAlertOpen);
  };

  const toggleDropdown = (evt: SyntheticEvent<HTMLButtonElement>) => {
    setIsDropdownShown(!isDropdownShown);
    setAnchorEl(evt.currentTarget);
  };

  const onDelete = () => {
    deleteCourse(item.id);
  };

  const onChangeStatus = (state: CourseState) => {
    updateCourse(item.id, { state });
    setIsDropdownShown(false);
  };

  const MENU_ITEMS = [
    { id: 'open', title: CourseState.Open, action: () => onChangeStatus(CourseState.Open) },
    { id: 'progress', title: CourseState.Progress, action: () => onChangeStatus(CourseState.Progress) },
    { id: 'done', title: CourseState.Done, action: () => onChangeStatus(CourseState.Done) },
    { id: 'archive', title: CourseState.Archive, action: () => onChangeStatus(CourseState.Archive) },
  ].filter(it => it.title !== item.state);

  return (
    <CourseItem>
      <Title
        ref={titleInputRef}
        change={updateCourse}
        item={item}
      />

      <Description
        ref={descriptionInputRef}
        change={updateCourse}
        item={item}
      />

      <Controls>
        <Button onClick={openAlert} color="secondary" variant="outlined" size="small">Delete</Button>
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

      <AlertDialog
        isOpen={isAlertOpen}
        title="Delete card"
        description="Are you sure you want to delete the card?"
        close={toggleAlert}
        agreeAction={onDelete}
      />
    </CourseItem>
  );
}

export default Item;
