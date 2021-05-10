import React, { useState, useEffect } from 'react';
import {
  HeaderContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import { Container } from '../components';
import sortReposByLastUpdate from '../helpers/sort-repos.helper';

export default function Browse() {
  const [login, setLogin] = useState('thecherno');
  const [repos, setRepos] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [user, setUser] = useState({});
  const [query, setQuery] = useState('');

  const reposPerPage = 4;
  const pagesiVisited = pageNum * reposPerPage;
  const pageCount = Math.ceil(user.public_repos / reposPerPage);

  function selectRepos() {
    return repos.slice(pagesiVisited, pagesiVisited + reposPerPage);
  }

  function changePage({ selected }) {
    setPageNum(selected);
  }

  async function getUser() {
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();
    setUser(data);
  }

  function updateLogin(e) {
    setLogin(e.target.value.trim());
  }

  function getLogin(e) {
    e.preventDefault();
    setPageNum(0);
    setQuery(login);
  }

  useEffect(() => {
    getUser();
    getRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  async function getRepos() {
    const res = await fetch(
      `https://api.github.com/users/${login}/repos?per_page=100`,
    );
    const data = await res.json();
    setRepos(sortReposByLastUpdate(data));
  }

  return (
    <>
      <HeaderContainer onChange={updateLogin} onSubmit={getLogin} />
      <Container>
        <ProfileContainer
          image={user.avatar_url}
          name={user.name}
          login={user.login}
          loginUrl={user.html_url}
          followers={user.followers}
          following={user.following}
        />
        <RepositoryContainer
          repos={selectRepos()}
          reposCount={user.public_repos}
          pageCount={pageCount}
          onPageChange={changePage}
          forcePage={pageNum}
        />
      </Container>
    </>
  );
}
