import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Board } from '../Boards.entities';

interface Props {
  board: Board;
  deleteBoard(id: string, boardUid: string): void;
}

export default ({ board, deleteBoard }: Props) => {
  const onDelete = () => {
    deleteBoard(board.id, board.uid);
  };

  return (
    <li key={board.uid}>
      <Link to={board.uid}>{board.name}</Link>

      <Button
        onClick={onDelete}
        variant="outlined"
        color="secondary"
      >
        Delete
      </Button>
    </li>
  )
};
