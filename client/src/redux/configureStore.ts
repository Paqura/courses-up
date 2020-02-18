import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({ reducer: rootReducer, middleware });
export { store };

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;