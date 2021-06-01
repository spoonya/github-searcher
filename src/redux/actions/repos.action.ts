import { Repository } from '../../types/api.type';
import { ReposAction, ReposActionTypes } from '../../types/redux/repos.type';
import { CONFIG } from '../../constants/redux.constant';
import { Dispatch } from 'react';

const fetchRepos =
  (login: string, pageNum: number = 0) =>
  async (dispatch: Dispatch<ReposAction>) => {
    if (!login) return;

    dispatch(setReposLoading(true));

    try {
      const res = await fetch(
        `https://api.github.com/users/${login}/repos?page=${
          pageNum + 1
        }&per_page=${CONFIG.reposPerPage}&sort=${CONFIG.sort}`,
      );
      const data: Repository[] = await res.json();

      setTimeout(() => {
        dispatch(setRepos(data));
        dispatch(setPage(pageNum));
      }, CONFIG.loaderUnmountDelay);
    } catch (error) {
      console.log(error.message);
    }
  };

const setRepos = (repos: Repository[]): ReposAction => ({
  type: ReposActionTypes.SET_REPOS,
  payload: repos,
});

const setPage = (pageNum: number): ReposAction => ({
  type: ReposActionTypes.SET_PAGE,
  payload: pageNum,
});

const setReposLoading = (isLoading: boolean): ReposAction => ({
  type: ReposActionTypes.SET_REPOS_LOADING,
  payload: isLoading,
});

export { fetchRepos, setPage };
