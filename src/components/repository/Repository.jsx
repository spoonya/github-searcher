import React from 'react';
import { Container, Title, Item, Link, Description } from './styles/repository';

export default function Repository(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Repository.Title = function RepositoryTitle(props) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Repository.Item = function RepositoryItem(props) {
  const { children } = props;

  return <Item>{children}</Item>;
};

Repository.Link = function RepositoryLink(props) {
  const { children, href } = props;

  return <Link href={href}>{children}</Link>;
};

Repository.Description = function RepositoryDescription(props) {
  const { children } = props;

  return <Description>{children}</Description>;
};
