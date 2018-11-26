import { combineReducers } from 'redux';
import { user } from './user/reducer';

export const profileState = combineReducers ({
  user,
});
