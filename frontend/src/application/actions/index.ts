import { combineReducers } from 'redux';
import post from './post';

const reducers = combineReducers({
  entities: combineReducers({
    post,
  }),
});

export default reducers;