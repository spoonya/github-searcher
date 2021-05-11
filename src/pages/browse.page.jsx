import React, { useState, useEffect } from 'react';
import {
  HeaderContainer,
  InitialContainer,
  NouserContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import { Container } from '../components';
import sortReposByLastUpdate from '../helpers/sort-repos.helper';
import prettifyNumber from '../helpers/prettify-number';
import NoreposContainer from '../containers/norepos.container';

export default function Browse() {
  const [login, setLogin] = useState('');
  const [repos, setRepos] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [user, setUser] = useState({});
  const [query, setQuery] = useState('');

  const reposPerPage = 4;
  const pagesVisited = pageNum * reposPerPage;
  const pageCount = Math.ceil(user.public_repos / reposPerPage);

  async function getUser() {
    if (login) {
      const res = await fetch(`https://api.github.com/users/${login}`);
      const data = await res.json();
      setUser(data);
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
    setUser('');
  }

  async function getRepos() {
    if (login) {
      const res = await fetch(
        `https://api.github.com/users/${login}/repos?per_page=100`,
      );
      const data = await res.json();

      if (data.length >= 1) {
        setRepos(sortReposByLastUpdate(data));
      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <HeaderContainer onChange={updateLogin} onSubmit={getLogin} />
      <Container>
        {query ? (
          <>
            {user.id ? (
              <>
                <ProfileContainer
                  image={user.avatar_url}
                  name={user.name}
                  login={user.login}
                  loginUrl={user.html_url}
                  followers={prettifyNumber(user.followers)}
                  following={user.following}
                />
                {repos.length ? (
                  <RepositoryContainer
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
                          : pagesVisited + reposPerPage,
                    }}
                  />
                ) : (
                  <NoreposContainer />
                )}
              </>
            ) : (
              <NouserContainer />
            )}
          </>
        ) : (
          <InitialContainer />
        )}
      </Container>
    </>
  );
}
