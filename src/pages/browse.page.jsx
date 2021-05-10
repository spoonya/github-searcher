import React, { useState, useEffect } from 'react';
import {
  HeaderContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import { Container } from '../components';
import sortReposByLastUpdate from '../helpers/sort-repos.helper';

export default function Browse() {
  const [login, setLogin] = useState('spoonya');
  const [user, setUser] = useState({});
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState([]);

  async function getUser() {
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();
    setUser(data);
  }

  function updateLogin(e) {
    setLogin(e.target.value);
  }

  function getLogin(e) {
    e.preventDefault();
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
    setRepos(data);
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
          repos={sortReposByLastUpdate(repos)}
          reposCount={user.public_repos}
        />
      </Container>
    </>
  );
}
