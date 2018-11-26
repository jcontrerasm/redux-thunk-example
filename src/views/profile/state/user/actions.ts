import { IAction } from '@app/src/common/interfaces/action';
import { FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from './actionTypes';


export const fetchUserStart = (): IAction => ({
  type: FETCH_USER_START
});

export const fetchUserSuccess = (user: object[]): IAction => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserError = (error: any): IAction => ({
  type: FETCH_USER_ERROR,
  payload: error
});
