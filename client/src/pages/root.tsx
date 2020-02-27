import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history, RootState } from '../redux/configureStore';
import { Menu } from '../components/shared/Menu';
import { Archive } from '../components/Archive';
import BoardsPage from './boards';
import BoardPage from './board';
import { getNotificationText } from '../selectors/notification';
import { connect } from 'react-redux';
import { liveNotification, removeNotification } from '../actions/notification';
import { Snackbar } from '@material-ui/core';

const TIME_TO_HIDE_MESSAGE = 6000;

interface ReduxState {
  message: string | null;
}

interface DispatchableActions {
  liveNotification(message: string): void;
  removeNotification(): void;
}

type Props = ReduxState & DispatchableActions;

const RootPage: React.FC<Props> = ({ message, liveNotification, removeNotification }) => {
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
    <Router history={history}>
      <Menu />

      <Switch>
        <Route path="/" exact>
          <BoardsPage />
        </Route>

        <Route path="/:id" exact>
          <BoardPage liveNotification={liveNotification} />
        </Route>

        <Route path="/archive/boards" exact>
          <Archive liveNotification={liveNotification} />
        </Route>
      </Switch>

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
    </Router>
  );
};


const mapStateToProps = (state: RootState) => ({
  message: getNotificationText(state),
});

const mapDispatchToProps = {
  removeNotification,
  liveNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);