import React from 'react'
import { Button } from '@material-ui/core'
import { CREATE_BOARD } from './graphql/mutation/create';
import { useMutation, useQuery } from 'react-apollo';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { GET_BOARDS } from './graphql/query/boards';
import { Link } from 'react-router-dom';
import { BoardsQuery } from './Boards.entities';
import { DELETE_BOARD } from './graphql/mutation/delete';
import { UPDATE_CARD_STATE } from './graphql/mutation/updateCardState';
import { CardState } from '../Cards/Cards.entities';

interface Props {
  replace(id: string): void;
}

const Board: React.FC<Props> = ({ replace }) => {
  const { loading, error, data } = useQuery<BoardsQuery>(GET_BOARDS, {
    fetchPolicy: 'no-cache',
  });

  const [createBoardMutation] = useMutation(CREATE_BOARD);
  const [deleteBoardMutation] = useMutation(DELETE_BOARD);
  const [updateCardStateMutation] = useMutation(UPDATE_CARD_STATE);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const { boards } = data!;

  const moveToBoardPage = (uid: string) => {
    replace(uid)
  };

  const createBoard = () => {
    createBoardMutation({
      variables: {
        data: {
          uid: uuid(),
          name: 'Unnamed',
        },
      },
    }).then(res => moveToBoardPage(res.data.createBoard.uid));
  };

  const updateCardsState = (boardId: string) => {
    updateCardStateMutation({
      variables: {
        data: {
          state: CardState.Archive,
        },
        boardId: { boardId },
      },
    }).then(console.log);
  };

  const deleteBoard = (id: string, boardId: string) => {
    deleteBoardMutation({
      variables: {
        id: { id }
      },

      refetchQueries: ['Boards'],
    }).then(_ => updateCardsState(boardId));
  };

  return (
    <div>
      <ul>
        {boards.map(board => (
          <li key={board.uid}>
            <Link to={board.uid}>{board.name}</Link>
            <Button onClick={_ => deleteBoard(board.id, board.uid)} variant="outlined" color="secondary">Delete</Button>
          </li>
        ))}
      </ul>

      <Button onClick={createBoard} color="primary">
        Create board
      </Button>
    </div>
  )
};

const mapDispatchToProps = {
  replace: (id: string) => push(`/${id}/`),
};

export default connect(null, mapDispatchToProps)(Board);
