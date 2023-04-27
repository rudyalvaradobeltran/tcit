/* eslint-disable @typescript-eslint/no-explicit-any */
import { spawn, call, put, takeLatest } from 'redux-saga/effects';
import { postActions } from '../../../application/actions/post';
import api from '../../api';

const apiRequest = api(process.env.REACT_APP_BACKEND_URL?.toString() || 'http://localhost:3000');

export function* fetchPosts() {
  try {
    const { data, error } = yield call(apiRequest.get, '/api/posts');
    if (data) yield put(postActions.fetchPostsSuccess(data));
    else yield put(postActions.fetchPostsError(error));
  } catch (error: any) {
    yield put(postActions.fetchPostsError(error));
  }
}

export function* savePost(params: any) {
  try {
    const { data, error } = yield call(apiRequest.put, `/api/posts`, params.payload);
    if (data) yield put(postActions.savePostSuccess(data));
    else yield put(postActions.savePostError(error));
  } catch (error: any) {
    yield put(postActions.savePostError(error));
  }
}

export function* deletePost(params: any) {
  try {
    const { data, error } = yield call(apiRequest.delete, `/api/posts/${params.payload.id}`);
    if (data) yield put(postActions.deletePostSuccess(data));
    else yield put(postActions.deletePostError(error));
  } catch (error: any) {
    yield put(postActions.deletePostError(error));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(postActions.fetchPosts.type, fetchPosts);
}

export function* watchSavePost() {
  yield takeLatest(postActions.savePost.type, savePost);
}

export function* watchDeletePost() {
  yield takeLatest(postActions.deletePost.type, deletePost);
}

export default function* rootSaga() {
  yield spawn(watchDeletePost);
  yield spawn(watchSavePost);
  yield spawn(watchFetchPosts);
}