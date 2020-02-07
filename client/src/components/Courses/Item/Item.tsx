import React, { useState, useRef, SyntheticEvent } from 'react';
import { Course, CourseStatus } from '../Courses.entities';
import { Controls, CourseItem, CourseTitle } from './Item.styled';
import { Button, TextField } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { CourseActions } from '../Courses';

// TODO
// in the future separate this component on parts (Title, Description, Controls)

interface Props {
  actions: CourseActions;
  item: Course;
}

const Item: React.FC<Props> = ({
  actions: { changeStatus, changeTitle, changeDescription, deleteCourse },
  item
}) => {
  const [doesTitleUpdate, setDoesTitleUpdate] = useState(false);
  const [doesDescriptionUpdate, setDoesDescriptionUpdate] = useState(false);
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const toggleDropdown = (evt: SyntheticEvent<HTMLButtonElement>) => {
    setIsDropdownShown(!isDropdownShown);
    setAnchorEl(evt.currentTarget);
  };

  const showTitleUpdater = () => {
    setDoesTitleUpdate(true);
  };

  const showDescriptionUpdater = () => {
    setDoesDescriptionUpdate(true);
  };

  const onDelete = () => {
    deleteCourse(item.id);
  };

  const onChangeStatus = (status: CourseStatus) => {
    changeStatus(item.id, status);
    setIsDropdownShown(false);
  };

  const onChangeTitle = () => {
    setDoesTitleUpdate(false);
    changeTitle(item.id, titleInputRef.current!.value);
  };

  const onChangeDescription = () => {
    setDoesDescriptionUpdate(false);
    changeDescription(item.id, descriptionInputRef.current!.value);
  };

  const MENU_ITEMS = [
    { id: '1', title: CourseStatus.Open, action: () => onChangeStatus(CourseStatus.Open) },
    { id: '2', title: CourseStatus.Progress, action: () => onChangeStatus(CourseStatus.Progress) },
    { id: '3', title: CourseStatus.Done, action: () => onChangeStatus(CourseStatus.Done) },
  ].filter(it => it.title !== item.status);

  return (
    <CourseItem>
      {doesTitleUpdate ? (
        <>
          <TextField defaultValue={item.title} inputRef={titleInputRef} />
          <Button onClick={onChangeTitle}>Save</Button>
        </>
      ) : (
        <CourseTitle onClick={showTitleUpdater}>
          {item.title}
        </CourseTitle>
      )}

      {doesDescriptionUpdate ? (
        <>
          <TextField
            multiline
            variant="filled"
            defaultValue={item.description}
            inputRef={descriptionInputRef}
          />

          <Button onClick={onChangeDescription}>Save</Button>
        </>
      ) : (
        <p onClick={showDescriptionUpdater} style={{ height: '60px', backgroundColor: 'blue' }}>{item.description}</p>
      )}

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
