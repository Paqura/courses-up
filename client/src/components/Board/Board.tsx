import React from 'react'
import { Button } from '@material-ui/core'
import { CREATE_BOARD } from './graphql/mutation/create';
import { useMutation, useQuery } from 'react-apollo';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { GET_BOARDS } from './graphql/query/boards';
import { Link } from 'react-router-dom';

interface Props {
  replace(id: string): void;
}

interface BoardsQuery {
  boards: {
    uid: string;
    name: string;
  }[];
}

const Board: React.FC<Props> = ({ replace }) => {
  const { loading, error, data } = useQuery<BoardsQuery>(GET_BOARDS);
  const [createBoardMutation] = useMutation(CREATE_BOARD);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

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

  const { boards } = data!;

  return (
    <div>
      <ul>
        {boards.map(board => (
          <li key={board.uid}>
            <Link to={board.uid}>{board.name}</Link>
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
