import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes.constant';

export default function HeaderContainer(props) {
  const { onChange, onSubmit } = props;

  return (
    <Header>
      <Header.GroupLeft>
        <Header.Logo
          to={ROUTES.BROWSE}
          src="/images/header/logo.svg"
          alt="GitHub"
        />
        <Header.Input onChange={onChange} onSubmit={onSubmit} />
      </Header.GroupLeft>
    </Header>
  );
}
