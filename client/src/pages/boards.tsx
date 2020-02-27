import React from 'react';
import { Boards } from '../components/Boards';

interface Props {
  liveNotification(message: string): void;
}

const BoardsPage: React.FC<Props> = ({ liveNotification }) => {
  return (
    <Boards liveNotification={liveNotification} />
  )
};

export default BoardsPage;
