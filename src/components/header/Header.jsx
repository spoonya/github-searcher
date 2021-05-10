import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Container, GroupLeft, Form, Input, Logo, Icon } from './styles/header';

export default function Header(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Header.Logo = function HeaderLogo(props) {
  const { to, src, alt } = props;

  return (
    <ReactRouterLink to={to}>
      <Logo src={src} alt={alt} />
    </ReactRouterLink>
  );
};

Header.GroupLeft = function HeaderGroupLeft(props) {
  const { children } = props;

  return <GroupLeft>{children}</GroupLeft>;
};

Header.Input = function HeaderInput(props) {
  const { onChange, onSubmit } = props;

  return (
    <Form onSubmit={onSubmit}>
      <Icon src="/images/header/search.svg" alt="Search" />
      <Input placeholder="Enter GitHub username" onChange={onChange} />
    </Form>
  );
};
