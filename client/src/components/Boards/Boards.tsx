import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { CREATE_BOARD } from '../../graphql/mutations/board/create';
import { useMutation, useQuery } from 'react-apollo';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { GET_BOARDS } from '../../graphql/query/boards';
import { BoardsQuery } from './Boards.entities';
import { DELETE_BOARD } from '../../graphql/mutations/board/delete';
import { UPDATE_CARD_STATE } from '../../graphql/mutations/card/updateMany';
import { CardState } from '../../entities/card';
import { QueryMap } from '../../utils/api';
import { Board } from './Board';
import { StateHandler } from '../shared/getStateHandler';
import { List } from './Boards.styled';
import { FormDialog } from './FormDialog';

interface Props {
  replace(id: string): void;
  liveNotification(message: string): void;
}

const Boards: React.FC<Props> = ({ replace, liveNotification }) => {
  const { loading, error, data } = useQuery<BoardsQuery>(GET_BOARDS, {
    fetchPolicy: 'no-cache',
  });

  const [createBoardMutation] = useMutation(CREATE_BOARD);
  const [deleteBoardMutation] = useMutation(DELETE_BOARD);
  const [updateCardStateMutation] = useMutation(UPDATE_CARD_STATE);

  const [isFormDialogShown, setIsFormDialogShown] = useState(false);

  const createBoard = (name: string) => {
    createBoardMutation({
      variables: {
        data: {
          uid: uuid(),
          name,
        },
      },
    }).then(res => replace(res.data.createBoard.uid));
  };

  const updateCardsState = (boardId: string) => {
    updateCardStateMutation({
      variables: {
        data: {
          state: CardState.Archive,
        },
        boardId: { boardId },
      },
    }).then(response => {
      const { count } = response.data.updateManyCards;
      liveNotification(`${count} cards was moved to archive`);
    });
  };

  const deleteBoard = (id: string, boardId: string) => {
    deleteBoardMutation({
      variables: {
        id: { id }
      },

      refetchQueries: [QueryMap.Boards],
    }).then(_ => updateCardsState(boardId));
  };

  const toggleFormDialog = () => {
    setIsFormDialogShown(!isFormDialogShown);
  };

  if (error || loading) {
    return <StateHandler loading={loading} error={error} />;
  }

  return (
    <>
      <List>
        {data && data.boards.map(board => (
          <Board key={board.id} board={board} deleteBoard={deleteBoard} />
        ))}
      </List>

      <FormDialog
        isOpen={isFormDialogShown}
        save={createBoard}
        close={toggleFormDialog}
      />

      <Button onClick={toggleFormDialog} color="primary" variant="contained">
        Create board
      </Button>
    </>
  )
};

const mapDispatchToProps = {
  replace: (id: string) => push(`/${id}/`),
};

export default connect(null, mapDispatchToProps)(Boards);
