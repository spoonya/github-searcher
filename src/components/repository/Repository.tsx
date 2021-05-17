import {
  Container,
  Title,
  Item,
  Link,
  Description,
  PaginationContainer,
  PaginationRange,
} from './styles/repository';
import { RepositoryTypes } from '../../types/components';

export default function Repository(props: RepositoryTypes.Repository) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Repository.Title = function RepositoryTitle(props: RepositoryTypes.Repository) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Repository.Item = function RepositoryItem(props: RepositoryTypes.Repository) {
  const { children } = props;

  return <Item>{children}</Item>;
};

Repository.Link = function RepositoryLink(
  props: RepositoryTypes.RepositoryLink,
) {
  const { children, href } = props;

  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
};

Repository.Description = function RepositoryDescription(
  props: RepositoryTypes.Repository,
) {
  const { children } = props;

  return <Description>{children}</Description>;
};

Repository.PaginationContainer = function RepositoryPaginationContainer(
  props: RepositoryTypes.Repository,
) {
  const { children } = props;

  return <PaginationContainer>{children}</PaginationContainer>;
};

Repository.Range = function RepositoryRange(props: RepositoryTypes.Repository) {
  const { children } = props;

  return <PaginationRange>{children}</PaginationRange>;
};
