import React from 'react'
import { Button } from '@material-ui/core'
import { CREATE_BOARD } from './graphql/mutation/create';
import { useMutation, useQuery } from 'react-apollo';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { GET_BOARDS } from './graphql/query/boards';
import { BoardsQuery } from './Boards.entities';
import { DELETE_BOARD } from './graphql/mutation/delete';
import { UPDATE_CARD_STATE } from './graphql/mutation/updateCardState';
import { CardState } from '../Cards/Cards.entities';
import { QueryMap } from '../../utils/api';
import { Board } from './Board';
import { StateHandler } from '../shared/getStateHandler';
import { List } from './Boards.styled';

interface Props {
  replace(id: string): void;
}

const Boards: React.FC<Props> = ({ replace }) => {
  const { loading, error, data } = useQuery<BoardsQuery>(GET_BOARDS, {
    fetchPolicy: 'no-cache',
  });

  const [createBoardMutation] = useMutation(CREATE_BOARD);
  const [deleteBoardMutation] = useMutation(DELETE_BOARD);
  const [updateCardStateMutation] = useMutation(UPDATE_CARD_STATE);

  const createBoard = () => {
    createBoardMutation({
      variables: {
        data: {
          uid: uuid(),
          name: 'Unnamed',
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
    // show notification about archiving the cards
    // N cards moved to archive
    }).then(console.log);
  };

  const deleteBoard = (id: string, boardId: string) => {
    deleteBoardMutation({
      variables: {
        id: { id }
      },

      refetchQueries: [QueryMap.Boards],
    }).then(_ => updateCardsState(boardId));
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

      <Button onClick={createBoard} color="primary" variant="contained">
        Create board
      </Button>
    </>
  )
};

const mapDispatchToProps = {
  replace: (id: string) => push(`/${id}/`),
};

export default connect(null, mapDispatchToProps)(Boards);
