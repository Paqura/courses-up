import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers';
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()
const RootReducer = rootReducer(history);

const middleware = [...getDefaultMiddleware(), logger, routerMiddleware(history)];

const store = configureStore({ reducer: RootReducer, middleware });
export { store };

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;