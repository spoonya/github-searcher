import {
  ReposActionTypes,
  ReposState,
  ReposAction,
} from '../../types/redux/repos.type';
import { Repository } from '../../types/api.type';

const initialState: ReposState = {
  repos: [] as Repository[],
  pageNum: 0,
  isReposLoading: true,
};

const repos = (state = initialState, action: ReposAction): ReposState => {
  switch (action.type) {
    case ReposActionTypes.SET_REPOS:
      return {
        ...state,
        repos: action.payload,
        isReposLoading: false,
      };

    case ReposActionTypes.SET_PAGE:
      return {
        ...state,
        pageNum: action.payload,
      };

    case ReposActionTypes.SET_REPOS_LOADING:
      return {
        ...state,
        isReposLoading: action.payload,
      };

    default:
      return state;
  }
};

export default repos;
