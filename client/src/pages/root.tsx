import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Courses } from '../components/Courses';
import { Snackbar } from '@material-ui/core';
import { RootState, history } from '../redux/configureStore';
import { connect } from 'react-redux';
import { removeNotification } from '../actions/notification';
import { Menu } from '../components/shared/Menu';
import { Archive } from '../components/Archive';
import { Board } from '../components/Board';

const TIME_TO_HIDE_MESSAGE = 6000;

interface Props {
  message: string | null;
  removeNotification(): void;
}

const Pages: React.FC<Props> = ({ message, removeNotification }) => {
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
          <Board />
        </Route>
        <Route path="/:id" exact>
          <Courses />

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
        </Route>

        <Route path="/archive" exact>
          <Archive />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: RootState) => ({
  message: state.notification.text,
});

const mapDispatchToProps = {
  removeNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);