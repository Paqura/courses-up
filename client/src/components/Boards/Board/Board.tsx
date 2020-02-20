import React, { useState, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Board } from '../Boards.entities';
import { BoardWrapper } from './Board.styled';
import DeleteOutlineIcon from '@material-ui/icons/Menu';
import { useMutation } from 'react-apollo';
import { UPDATE_BOARD } from '../graphql/mutation/update';
import { FormDialog } from '../FormDialog';
import { QueryMap } from '../../../utils/api';
interface Props {
  board: Board;
  deleteBoard(id: string, boardUid: string): void;
}

export default ({ board, deleteBoard }: Props) => {
  const [updateBoardMutation] = useMutation(UPDATE_BOARD);

  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [isFormDialogShown, setIsFormDialogShown] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const toggleDropdown = (evt: SyntheticEvent<HTMLButtonElement>) => {
    setIsDropdownShown(!isDropdownShown);
    setAnchorEl(evt.currentTarget);
  };

  const toggleFormDialog = () => {
    setIsFormDialogShown(!isFormDialogShown);
    setIsDropdownShown(false);
  };

  const onDelete = () => {
    deleteBoard(board.id, board.uid);
  };

  const updateBoard = (name: string) => {
    updateBoardMutation({
      variables: {
        id: { id: board.id },
        data: {
          name,
        },
      },

      refetchQueries: [QueryMap.Boards],
    }).then(toggleFormDialog);
  };

  const MENU_ITEMS = [
    { id: 'delete', title: 'Delete', action: onDelete },
    { id: 'update', title: 'Update board', action: toggleFormDialog },
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

      <FormDialog
        defaults={board}
        isOpen={isFormDialogShown}
        close={toggleFormDialog}
        save={updateBoard}
      />
    </BoardWrapper>
  )
};
