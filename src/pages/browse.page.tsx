/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import {
  HeaderContainer,
  InitialContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import * as TApi from '../types/api.type';
import { Container, Loader } from '../components';
import { usePrevious } from '../hooks';
import { prettifyNumber } from '../helpers';

export default function Browse() {
  const [login, setLogin] = useState('');
  const [repos, setRepos] = useState<TApi.Repository[] | null>(null);
  const [pageNum, setPageNum] = useState(0);
  const [user, setUser] = useState<TApi.User | null>(null);
  const [query, setQuery] = useState('');
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(true);

  const prevLogin: string = usePrevious(query);
  const reposPerPage: number = 4;
  const pagesVisited: number = pageNum * reposPerPage;
  const pageCount: number = Math.ceil(
    user ? user!.public_repos / reposPerPage : 0,
  );
  const unmountDelay: number = 200;

  function changePage(selectedItem: { selected: number }) {
    setPageNum(selectedItem.selected);
  }

  function updateLogin(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin(e.target.value.trim());
  }

  function getLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (prevLogin !== login) {
      setLoadingProfile(true);
      setLoadingRepos(true);
      setQuery(login);
      setPageNum(0);
      setRepos(null);
      setUser(null);
    }
  }

  async function getUser() {
    if (!login) return;

    try {
      const res = await fetch(`https://api.github.com/users/${login}`);
      const data: TApi.User = await res.json();
      setUser(data);
    } catch (e) {
      console.log(e.message);
    }

    setTimeout(() => {
      setLoadingProfile(false);
    }, unmountDelay);
  }

  async function getRepos() {
    if (!login) return;

    let data: TApi.Repository[] = [];

    try {
      const res = await fetch(
        `https://api.github.com/users/${login}/repos?page=${
          pageNum + 1
        }&per_page=4&sort=updated_at`,
      );
      data = await res.json();
    } catch (e) {
      console.log(e.message);
    }

    if (data.length) {
      setRepos(data);
    }

    setTimeout(() => {
      setLoadingRepos(false);
    }, unmountDelay);
  }

  useEffect(() => {
    getUser();
    getRepos();
  }, [query]);

  useEffect(() => {
    setLoadingRepos(true);
    getRepos();
  }, [pageNum]);

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
            {loadingProfile ? <Loader /> : null}
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
            {user && (
              <RepositoryContainer
                id={user!.id}
                repos={repos}
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
                isLoading={loadingRepos}
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
