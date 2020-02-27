import React from 'react';
import { Cards } from '../components/Cards';
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
    <Cards
      boardId={match.params.id}
      liveNotification={liveNotification}
    />
  );
};

export default BoardPage;