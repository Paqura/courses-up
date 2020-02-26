import React, { useState, useEffect } from 'react';
import { Cards } from '../components/Cards';
import { Snackbar } from '@material-ui/core';
import { connect } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { removeNotification, liveNotification } from '../actions/notification';
import { useRouteMatch } from 'react-router-dom';

const TIME_TO_HIDE_MESSAGE = 6000;

interface MatchParams {
  id: string;
}

interface Props {
  message: string | null;
  removeNotification(): void;
  liveNotification(message: string): void;
}

const BoardPage: React.FC<Props> = ({
  liveNotification,
  removeNotification,
  message,
}) => {
  const match = useRouteMatch<MatchParams>();
  const [isShownNotification, setIsShowNotification] = useState(false);

  useEffect(() => {
    setIsShowNotification(Boolean(message));

    return () => {
      setIsShowNotification(false);
    }
  }, [message]);


  const hideNotification = () => {
    setIsShowNotification(false);
    removeNotification();
  };

  return (
    <>
      <Cards boardId={match.params.id} liveNotification={liveNotification} />

      <Snackbar
        open={isShownNotification}
        onClose={hideNotification}
        autoHideDuration={TIME_TO_HIDE_MESSAGE}
        message={message}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      />
    </>
  )
};

const mapStateToProps = (state: RootState) => ({
  message: state.notification.text,
});

const mapDispatchToProps = {
  removeNotification,
  liveNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);