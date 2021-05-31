/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';

import { useTypedSelector } from '../hooks';
import { Header } from '../components';
import * as ROUTES from '../constants/routes.constant';
import { ThemesContext } from '../context';
import { useActions } from '../hooks';

export default function HeaderContainer() {
  const { input, query } = useTypedSelector(({ user }) => user);
  const { setInput, setQuery, fetchUser } = useActions();
  const { fetchRepos } = useActions();

  const { theme, toggleTheme } = useContext(ThemesContext);

  function updateInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value.trim());
  }

  function getInput(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setQuery(input);
  }

  useEffect(() => {
    fetchUser(query);
    fetchRepos(query);
  }, [query]);

  return (
    <Header>
      <Header.GroupLeft>
        <Header.Logo
          to={ROUTES.BROWSE}
          src="/images/header/logo.svg"
          alt="GitHub Browse Users"
        />
        <Header.Input
          onChange={updateInput}
          onSubmit={getInput}
          value={input}
        />
      </Header.GroupLeft>
      <Header.GroupRight>
        <Header.Toggler theme={theme} onClick={toggleTheme} />
      </Header.GroupRight>
    </Header>
  );
}
