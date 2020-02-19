import React, { useState, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Board } from '../Boards.entities';
import { BoardWrapper } from './Board.styled';
import DeleteOutlineIcon from '@material-ui/icons/Menu';
interface Props {
  board: Board;
  deleteBoard(id: string, boardUid: string): void;
}

export default ({ board, deleteBoard }: Props) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const toggleDropdown = (evt: SyntheticEvent<HTMLButtonElement>) => {
    setIsDropdownShown(!isDropdownShown);
    setAnchorEl(evt.currentTarget);
  };

  const onDelete = () => {
    deleteBoard(board.id, board.uid);
  };

  const callback = () => {};

  const MENU_ITEMS = [
    { id: 'delete', title: 'Delete', action: onDelete },
    { id: 'second', title: 'Second', action: callback },
  ];

  return (
    <BoardWrapper key={board.uid}>
      <Link to={board.uid}>{board.name}</Link>

      <Button
        onClick={toggleDropdown}
        color="default"
        size="small"
      >
        <DeleteOutlineIcon />
      </Button>

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
    </BoardWrapper>
  )
};
