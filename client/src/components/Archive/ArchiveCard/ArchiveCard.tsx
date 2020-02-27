import React, { useState } from 'react'
import { Card } from '../../../entities/card';
import { Button } from '@material-ui/core';
import { useQuery, ExecutionResult } from 'react-apollo';
import { GET_BOARDS } from '../../../graphql/query/boards';
import { StateHandler } from '../../shared/getStateHandler';
import { BoardsQuery } from '../../Boards/Boards.entities';
import { MoveDialog } from '../MoveDialog';
import { Description } from '../../shared/Description';
import { Title } from '../../shared/Title';

interface Props {
  card: Card;
  move(boardId: string, cardId: string): Promise<ExecutionResult<Card>>;
  liveNotification(message: string): void;
}

const ArchiveCard: React.FC<Props> = ({ card, move, liveNotification }) => {
  const { loading, error, data } = useQuery<BoardsQuery>(GET_BOARDS);

  const [isMoveModalShown, setIsMoveModalShown] = useState(false);

  if (loading || error) {
    return <StateHandler error={error} loading={loading} />
  }

  const boards = data?.boards ?? [];

  const onMove = async (boardId: string) => {
    try {
      await move(boardId, card.id);
      liveNotification(`Card: ${card.title} was moved`);
    } catch (error) {
      liveNotification(error.message || error);
    } finally {
      toggleMoveModal();
    }
  };

  const toggleMoveModal = () => {
    setIsMoveModalShown(!isMoveModalShown);
  };

  return (
    <li key={card.id}>
      <Title title={card.title} />
      <Description description={card.description} />

      <Button onClick={toggleMoveModal}>Move to board</Button>

      <MoveDialog
        isOpen={isMoveModalShown}
        close={toggleMoveModal}
        boards={boards}
        save={onMove}
      />
    </li>
  );
};

export default ArchiveCard;
