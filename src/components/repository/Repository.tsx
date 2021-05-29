import {
  Container,
  Inner,
  Title,
  Item,
  Link,
  Description,
  PaginationContainer,
  PaginationRange,
} from './styles/repository';
import { TRepository } from '../../types/components';

export default function Repository(props: TRepository.Inner) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Repository.Inner = function RepositoryInner(props: TRepository.Inner) {
  const { children } = props;

  return <Inner>{children}</Inner>;
};

Repository.Title = function RepositoryTitle(props: TRepository.Inner) {
  const { children } = props;

  return <Title>{children}</Title>;
};

Repository.Item = function RepositoryItem(props: TRepository.Inner) {
  const { children } = props;

  return <Item>{children}</Item>;
};

Repository.Link = function RepositoryLink(props: TRepository.Link) {
  const { children, href } = props;

  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
};

Repository.Description = function RepositoryDescription(
  props: TRepository.Inner,
) {
  const { children } = props;

  return <Description>{children}</Description>;
};

Repository.PaginationContainer = function RepositoryPaginationContainer(
  props: TRepository.Inner,
) {
  const { children } = props;

  return <PaginationContainer>{children}</PaginationContainer>;
};

Repository.Range = function RepositoryRange(props: TRepository.Inner) {
  const { children } = props;

  return <PaginationRange>{children}</PaginationRange>;
};
