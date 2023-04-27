/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, createSlice } from '@reduxjs/toolkit';
import initState from '../../../domain/entities/post';

const fetchPosts = createAction('fetchPosts');
const savePost: any = createAction('savePost');
const deletePost: any = createAction('deletePost');

function fetchPostsSuccess(state: any, action: any) {
  state.posts = action.payload;
  state.successFetchingPosts = true;
  state.errorFetchingPosts = false;
  state.errorData = null;
}

function fetchPostsError(state: any, action: any) {
  state.posts = [];
  state.successFetchingPosts = false;
  state.errorFetchingPosts = true;
  state.errorData = action.payload;
}

function savePostSuccess (state: any, action: any) {
  state.post = action.payload;
  state.successSavingPosts = true;
  state.errorSavingPosts = false;
  state.errorData = null;
}

function savePostError (state: any, action: any) {
  state.post = action.payload;
  state.successSavingPosts = false;
  state.errorSavingPosts = true;
  state.errorData = null;
}

function deletePostSuccess (state: any, action: any) {
  state.post = action.payload;
  state.successSavingPosts = true;
  state.errorSavingPosts = false;
  state.errorData = null;
}
function deletePostError (state: any, action: any) {
  state.post = action.payload;
  state.successSavingPosts = false;
  state.errorSavingPosts = true;
  state.errorData = null;
}

const postslice = createSlice({
  name: 'post',
  initialState: initState,
  reducers: {
    fetchPostsSuccess,
    fetchPostsError,
    savePostSuccess,
    savePostError,
    deletePostSuccess,
    deletePostError
  },
});

export const postActions = {
  ...postslice.actions,
  fetchPosts,
  savePost,
  deletePost
};

export default postslice.reducer;