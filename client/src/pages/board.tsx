import React from 'react';
import { Board } from '../components/Board';
import { useRouteMatch } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface Props {
  liveNotification(message: string): void;
}

const BoardPage: React.FC<Props> = ({ liveNotification }) => {
  const match = useRouteMatch<MatchParams>();

  return (
    <Board
      boardId={match.params.id}
      liveNotification={liveNotification}
    />
  );
};

export default BoardPage;