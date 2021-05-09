import React, { useState, useEffect, useCallback } from 'react';
import {
  HeaderContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import { Container } from '../components';

export default function Browse() {
  const [login, setLogin] = useState('');
  const [user, setUser] = useState({});
  const [query, setQuery] = useState('');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
        <RepositoryContainer />
      </Container>
    </>
  );
}
