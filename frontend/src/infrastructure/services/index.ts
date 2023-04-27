import { fork } from 'redux-saga/effects';
import postSaga from './post';

export default function* rootSaga() {
  yield fork(postSaga);
}