import React, { useState } from 'react'
import { Card } from '../../Cards/Cards.entities';
import { Button } from '@material-ui/core';
import { useQuery } from 'react-apollo';
import { GET_BOARDS } from '../../Boards/graphql/query/boards';
import { StateHandler } from '../../shared/getStateHandler';
import { BoardsQuery } from '../../Boards/Boards.entities';
import { MoveDialog } from '../MoveDialog';

interface Props {
  card: Card;
  move(boardId: string, cardId: string): void;
}

const ArchiveCard: React.FC<Props> = ({ card, move }) => {
  const { loading, error, data } = useQuery<BoardsQuery>(GET_BOARDS);

  const [isMoveModalShown, setIsMoveModalShown] = useState(false);

  if (loading || error) {
    return <StateHandler error={error} loading={loading} />
  }

  const boards = data?.boards || [];

  const onMove = (boardId: string) => {
    move(boardId, card.id);
    toggleMoveModal();
  };

  const toggleMoveModal = () => {
    setIsMoveModalShown(!isMoveModalShown);
  };

  return (
    <li key={card.id}>
      <h5>{card.title}</h5>

      <p>
        {card.description || 'No description'}
      </p>

      <Button onClick={toggleMoveModal}>Move to board</Button>

      <MoveDialog isOpen={isMoveModalShown} close={toggleMoveModal} boards={boards} save={onMove} />
    </li>
  );
};

export default ArchiveCard;
