import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history, RootState } from '../redux/configureStore';
import { Menu } from '../components/shared/Menu';
import { Archive } from '../components/Archive';
import BoardsPage from './boards';
import BoardPage from './board';
import { getNotificationText } from '../selectors/notification';
import { useDispatch, useSelector } from 'react-redux';
import { liveNotification, removeNotification } from '../actions/notification';
import { Snackbar } from '@material-ui/core';
import RegisterPage from './register';
import LoginPage from './login';
import { checkAuthRequest } from '../actions/session/auth';
import { selectSession } from '../selectors/session';

const TIME_TO_HIDE_MESSAGE = 6000;

const RootPage: React.FC = () => {
  const [isShownNotification, setIsShowNotification] = useState(false);

  const { isLoggedIn } = useSelector((state: RootState) => selectSession(state))

  const message = useSelector((state: RootState) => getNotificationText(state));
  const dispatch = useDispatch();

  const notify = (message: string) => dispatch(liveNotification(message));
  const notifyEnd = () => dispatch(removeNotification());

  useEffect(() => {
    dispatch(checkAuthRequest());
  }, [dispatch]);

  useEffect(() => {
    setIsShowNotification(Boolean(message));

    return () => {
      setIsShowNotification(false);
    }
  }, [message]);

  const hideNotification = () => {
    setIsShowNotification(false);
    notifyEnd();
  };

  return (
    <Router history={history}>
      <Menu isAuth={isLoggedIn} />

      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />

        <Route path="/" exact>
          <BoardsPage liveNotification={notify} />
        </Route>

        <Route path="/:id" exact>
          <BoardPage liveNotification={notify} />
        </Route>

        <Route path="/archive/boards" exact>
          <Archive liveNotification={notify} />
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

export default RootPage;