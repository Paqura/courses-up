import React, { useState, useRef, SyntheticEvent } from 'react';
import { Card, CardState, CardActions } from '../Cards.entities';
import { Controls, CardItem } from './Item.styled';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Description } from '../Description';
import { Title } from '../Title';
import { AlertDialog } from '../AlertDialog';

interface Props {
  actions: CardActions;
  item: Card;
}

const Item: React.FC<Props> = ({
  actions: { updateCard, deleteCard },
  item,
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
    deleteCard(item.id);
  };

  const onChangeStatus = (state: CardState) => {
    updateCard(item.id, { state });
    setIsDropdownShown(false);
  };

  const MENU_ITEMS = [
    { id: 'open', title: CardState.Open, action: () => onChangeStatus(CardState.Open) },
    { id: 'progress', title: CardState.Progress, action: () => onChangeStatus(CardState.Progress) },
    { id: 'done', title: CardState.Done, action: () => onChangeStatus(CardState.Done) },
    { id: 'archive', title: CardState.Archive, action: () => onChangeStatus(CardState.Archive) },
  ].filter(it => it.title !== item.state);

  return (
    <CardItem>
      <Title
        ref={titleInputRef}
        change={updateCard}
        item={item}
      />

      <Description
        ref={descriptionInputRef}
        change={updateCard}
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
    </CardItem>
  );
}

export default Item;
