/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducers from '../../actions';
import rootSagas from '../../../infrastructure/services';

const sagaMiddleware = createSagaMiddleware();

const middleware: Array<any> = [
  ...getDefaultMiddleware({
    immutableStateInvariant: false,
    thunk: false,
  }),
  sagaMiddleware
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = configureStore({
  middleware,
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSagas);

export default store;