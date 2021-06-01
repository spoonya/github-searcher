import { User } from '../api.type';

enum UserActionTypes {
  SET_QUERY = 'SET_QUERY',
  SET_USER = 'SET_USER',
  SET_USER_LOADING = 'SET_USER_LOADING',
}

type UserAction = UserSetQuery | UserSetUser | UserSetLoading;

type UserState = {
  query: string;
  user: User;
  isUserLoading: boolean;
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
