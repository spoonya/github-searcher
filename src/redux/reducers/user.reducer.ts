import { User } from '../../types/api.type';
import {
  UserAction,
  UserState,
  UserActionTypes,
} from '../../types/redux/user.type';

const initialState: UserState = {
  query: '',
  user: {} as User,
  isUserLoading: true,
};

const user = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isUserLoading: false,
      };

    case UserActionTypes.SET_USER_LOADING:
      return {
        ...state,
        isUserLoading: action.payload,
      };

    default:
      return state;
  }
};

export default user;
