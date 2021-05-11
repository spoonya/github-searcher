import React from 'react';
import {
  Container,
  Title,
  Item,
  Link,
  Description,
  PaginationContainer,
  PaginationRange,
} from './styles/repository';

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

  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
};

Repository.Description = function RepositoryDescription(props) {
  const { children } = props;

  return <Description>{children}</Description>;
};

Repository.PaginationContainer = function RepositoryPaginationContainer(props) {
  const { children } = props;

  return <PaginationContainer>{children}</PaginationContainer>;
};

Repository.Range = function RepositoryRange(props) {
  const { children } = props;

  return <PaginationRange>{children}</PaginationRange>;
};
