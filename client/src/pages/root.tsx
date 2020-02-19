import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux/configureStore';
import { Menu } from '../components/shared/Menu';
import { Archive } from '../components/Archive';
import BoardsPage from './boards';
import BoardPage from './board';

export default () => {
  return (
    <Router history={history}>
      <Menu />

      <Switch>
        <Route path="/" exact>
          <BoardsPage />
        </Route>

        <Route path="/:id" exact>
          <BoardPage />
        </Route>

        <Route path="/archive/boards" exact>
          <Archive />
        </Route>
      </Switch>
    </Router>
  );
};
