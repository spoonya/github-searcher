import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes.constant';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.GroupLeft>
        <Header.Logo
          to={ROUTES.BROWSE}
          src="/images/header/logo.svg"
          alt="GitHub"
        />
        <Header.Input />
      </Header.GroupLeft>
    </Header>
  );
}
