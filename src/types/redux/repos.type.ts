import { Repository } from '../api.type';

enum ReposActionTypes {
  SET_REPOS = 'SET_REPOS',
  SET_PAGE = 'SET_PAGE',
  SET_REPOS_LOADING = 'SET_REPOS_LOADING',
}

type ReposAction = ReposSetRepos | ReposSetPage | ReposSetLoading;

type ReposState = {
  repos: Repository[];
  pageNum: number;
  isReposLoading: boolean;
};

type ReposSetRepos = {
  type: ReposActionTypes.SET_REPOS;
  payload: Repository[];
};

type ReposSetPage = {
  type: ReposActionTypes.SET_PAGE;
  payload: number;
};

type ReposSetLoading = {
  type: ReposActionTypes.SET_REPOS_LOADING;
  payload: boolean;
};

export { ReposActionTypes };
export type { ReposAction, ReposState };
