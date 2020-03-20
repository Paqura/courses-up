import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory()
const RootReducer = rootReducer(history);

const middleware = [...getDefaultMiddleware(), logger, routerMiddleware(history), sagaMiddleware];

const store = configureStore({ reducer: RootReducer, middleware });
sagaMiddleware.run(rootSaga);

export { store };

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;