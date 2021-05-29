import { useContext } from 'react';

import { Header } from '../components';
import * as ROUTES from '../constants/routes.constant';
import { THeader } from '../types/components';
import { ThemesContext } from '../context';

export default function HeaderContainer(props: THeader.Input) {
  const { onChange, onSubmit, value } = props;
  const { theme, toggleTheme } = useContext(ThemesContext);

  return (
    <Header>
      <Header.GroupLeft>
        <Header.Logo
          to={ROUTES.BROWSE}
          src="/images/header/logo.svg"
          alt="GitHub Browse Users"
        />
        <Header.Input onChange={onChange} onSubmit={onSubmit} value={value} />
      </Header.GroupLeft>
      <Header.GroupRight>
        <Header.Toggler theme={theme} onClick={toggleTheme} />
      </Header.GroupRight>
    </Header>
  );
}
