import { useState, useEffect } from 'react';
import {
  HeaderContainer,
  InitialContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import * as ApiTypes from '../types/api.type';
import { Container, Loader } from '../components';
import { sortReposByLastUpdate, prettifyNumber } from '../helpers';

export default function Browse() {
  const [login, setLogin] = useState('');
  const [repos, setRepos] = useState<ApiTypes.Repository[] | null>();
  const [pageNum, setPageNum] = useState(0);
  const [user, setUser] = useState<ApiTypes.User | null>();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const reposPerPage: number = 4;
  const pagesVisited: number = pageNum * reposPerPage;
  const pageCount: number = Math.ceil(
    user ? user!.public_repos / reposPerPage : 0,
  );

  function selectRepos(): ApiTypes.Repository[] {
    return repos!.slice(pagesVisited, pagesVisited + reposPerPage);
  }

  function changePage(selectedItem: { selected: number }) {
    setPageNum(selectedItem.selected);
  }

  function updateLogin(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin(e.target.value.trim());
  }

  function getLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuery(login);
    setPageNum(0);
    setRepos(null);
    setUser(null);
    setLoading(true);
  }

  async function getUser() {
    if (!login) return;

    try {
      const res = await fetch(`https://api.github.com/users/${login}`);
      const data: ApiTypes.User = await res.json();
      setUser(data);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function getRepos() {
    if (!login) return;

    let data: ApiTypes.Repository[] = [];
    let dataFull: ApiTypes.Repository[] = [];
    let page: number = 1;

    try {
      do {
        const res = await fetch(
          `https://api.github.com/users/${login}/repos?page=${page++}&per_page=100`,
        );
        data = await res.json();
        dataFull = dataFull.concat(data);
      } while (data.length);
      setLoading(false);
    } catch (e) {
      throw new Error(e.message);
    }

    if (dataFull.length) {
      setRepos(sortReposByLastUpdate(dataFull));
    }
  }

  useEffect(() => {
    getUser();
    getRepos();
    setLogin('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, user]);

  return (
    <>
      <HeaderContainer
        onChange={updateLogin}
        onSubmit={getLogin}
        value={login}
      />
      <Container>
        {query ? (
          <>
            {loading ? <Loader /> : null}
            {user && (
              <ProfileContainer
                id={user!.id}
                image={user!.avatar_url}
                name={user!.name}
                login={user!.login}
                loginUrl={user!.html_url}
                followers={prettifyNumber(user!.followers)}
                following={prettifyNumber(user!.following)}
              />
            )}
            {user && repos && (
              <RepositoryContainer
                id={user!.id}
                repos={selectRepos()}
                reposCount={user!.public_repos}
                pageCount={pageCount}
                onPageChange={changePage}
                forcePage={pageNum}
                range={{
                  from: pagesVisited + 1,
                  to:
                    user!.public_repos < reposPerPage
                      ? user!.public_repos
                      : pagesVisited + reposPerPage > user!.public_repos
                      ? user!.public_repos
                      : pagesVisited + reposPerPage,
                }}
              />
            )}
          </>
        ) : (
          <InitialContainer />
        )}
      </Container>
    </>
  );
}
