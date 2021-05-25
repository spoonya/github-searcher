import { useState, useEffect, useRef } from 'react';
import {
  HeaderContainer,
  InitialContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import * as ApiTypes from '../types/api.type';
import { Container, Loader } from '../components';
import { prettifyNumber } from '../helpers';

export default function Browse() {
  const [login, setLogin] = useState('');
  const [repos, setRepos] = useState<ApiTypes.Repository[] | null>(null);
  const [pageNum, setPageNum] = useState(0);
  const [user, setUser] = useState<ApiTypes.User | null>(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const prevLogin = usePrevious(query);
  const reposPerPage: number = 4;
  const pagesVisited: number = pageNum * reposPerPage;
  const pageCount: number = Math.ceil(
    user ? user!.public_repos / reposPerPage : 0,
  );

  function changePage(selectedItem: { selected: number }) {
    setPageNum(selectedItem.selected);
  }

  function updateLogin(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin(e.target.value.trim());
  }

  function getLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (prevLogin !== login) {
      setQuery(login);
      setPageNum(0);
      setRepos(null);
      setUser(null);
      setLoading(true);
    }
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

    try {
      const res = await fetch(
        `https://api.github.com/users/${login}/repos?page=${
          pageNum + 1
        }&per_page=4&sort=updated_at`,
      );
      data = await res.json();
    } catch (e) {
      throw new Error(e.message);
    }

    if (data.length) {
      setRepos(data);
    }

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }

  function usePrevious(value: string): string {
    const ref = useRef('');

    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  useEffect(() => {
    getUser();
    getRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setLoading(true);
    getRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                isLoading={loading}
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
