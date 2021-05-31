import { User } from '../api.type';

enum UserActionTypes {
  SET_INPUT = 'SET_INPUT',
  SET_QUERY = 'SET_QUERY',
  SET_USER = 'SET_USER',
  SET_USER_LOADING = 'SET_USER_LOADING',
}

type UserAction = UserSetInput | UserSetQuery | UserSetUser | UserSetLoading;

type UserState = {
  input: string;
  query: string;
  user: User;
  isUserLoading: boolean;
};

type UserSetInput = {
  type: UserActionTypes.SET_INPUT;
  payload: string;
};

type UserSetQuery = {
  type: UserActionTypes.SET_QUERY;
  payload: string;
};

type UserSetUser = {
  type: UserActionTypes.SET_USER;
  payload: User;
};

type UserSetLoading = {
  type: UserActionTypes.SET_USER_LOADING;
  payload: boolean;
};

export { UserActionTypes };
export type { UserAction, UserState };
