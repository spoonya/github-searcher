import { Dispatch } from 'react';
import { CONFIG } from '../../constants/redux.constant';
import { User } from '../../types/api.type';
import { UserActionTypes, UserAction } from '../../types/redux/user.type';

const fetchUser = (login: string) => async (dispatch: Dispatch<UserAction>) => {
  if (!login) return;

  dispatch(setUserLoading(true));

  try {
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data: User = await res.json();

    setTimeout(() => {
      dispatch(setUser(data));
    }, CONFIG.loaderUnmountDelay);
  } catch (error) {
    console.log(error.message);
  }
};

const setQuery = (query: string): UserAction => ({
  type: UserActionTypes.SET_QUERY,
  payload: query,
});

const setUser = (user: User): UserAction => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});

const setUserLoading = (isLoading: boolean): UserAction => ({
  type: UserActionTypes.SET_USER_LOADING,
  payload: isLoading,
});

export { fetchUser, setQuery };
