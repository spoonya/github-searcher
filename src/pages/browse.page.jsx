import React, { useState, useEffect } from 'react';
import {
  HeaderContainer,
  InitialContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import { Container } from '../components';
import sortReposByLastUpdate from '../helpers/sort-repos.helper';
import prettifyNumber from '../helpers/prettify-number';
import Loader from '../components/loader/Loader';

export default function Browse() {
  const [login, setLogin] = useState('');
  const [repos, setRepos] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [user, setUser] = useState({});
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const reposPerPage = 4;
  const pagesVisited = pageNum * reposPerPage;
  const pageCount = Math.ceil(user.public_repos / reposPerPage);

  async function getUser() {
    if (!login) return;

    try {
      const res = await fetch(`https://api.github.com/users/${login}`);
      const data = await res.json();
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  }

  function updateLogin(e) {
    setLogin(e.target.value.trim());
  }

  function getLogin(e) {
    e.preventDefault();
    setQuery(login);
    setPageNum(0);
    setRepos([]);
    setUser({});
    setLoading(true);
  }

  async function getRepos() {
    if (!login) return;

    let data = [];
    let dataFull = [];
    let page = 1;

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
      console.log(e);
    }

    if (dataFull.length) {
      setRepos(sortReposByLastUpdate(dataFull));
    }
  }

  function selectRepos() {
    return repos.slice(pagesVisited, pagesVisited + reposPerPage);
  }

  function changePage({ selected }) {
    setPageNum(selected);
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
            <ProfileContainer
              id={user.id}
              image={user.avatar_url}
              name={user.name}
              login={user.login}
              loginUrl={user.html_url}
              followers={prettifyNumber(user.followers)}
              following={user.following}
            />
            <RepositoryContainer
              id={user.id}
              repos={selectRepos()}
              reposCount={user.public_repos}
              pageCount={pageCount}
              onPageChange={changePage}
              forcePage={pageNum}
              range={{
                from: pagesVisited + 1,
                to:
                  user.public_repos < reposPerPage
                    ? user.public_repos
                    : pagesVisited + reposPerPage > user.public_repos
                    ? user.public_repos
                    : pagesVisited + reposPerPage,
              }}
            />
          </>
        ) : (
          <InitialContainer />
        )}
      </Container>
    </>
  );
}
