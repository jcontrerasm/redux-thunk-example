import { FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './actionTypes';
import { IAction } from '@app/src/common/interfaces/action';

interface IInitialState {
  userData: object[];
  fetching: boolean;
  error: any;
}

const initialState: IInitialState = {
  userData: [],
  fetching: false,
  error: null,
};

export const user = (state = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        fetching: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload
      }
    case FETCH_USER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
