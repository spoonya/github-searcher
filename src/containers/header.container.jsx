import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes.constant';

export default function HeaderContainer(props) {
  const { onChange, onSubmit, value } = props;

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
    </Header>
  );
}
