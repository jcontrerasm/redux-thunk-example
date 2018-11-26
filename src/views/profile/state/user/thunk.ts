import { fetchUserStart, fetchUserSuccess, fetchUserError } from "./actions";

const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';

export const myThunk = (payload?: number) => {
  return async (dispatch: any) => {
    dispatch(fetchUserStart())
    try {
      const response = await fetch(url);
      const userData = await response.json();
      dispatch(fetchUserSuccess(userData));
    } catch(error) {
      dispatch(fetchUserError(error));
    }
  }
};
