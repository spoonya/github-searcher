import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Container,
  Inner,
  GroupLeft,
  Form,
  Input,
  Logo,
  Icon,
} from './styles/header';
import { HeaderTypes } from '../../types/components';

export default function Header(props: HeaderTypes.Header) {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Header.Logo = function HeaderLogo(props: HeaderTypes.HeaderLogo) {
  const { to, src, alt } = props;

  return (
    <ReactRouterLink to={to}>
      <Logo src={src} alt={alt} />
    </ReactRouterLink>
  );
};

Header.GroupLeft = function HeaderGroupLeft(props: HeaderTypes.Header) {
  const { children } = props;

  return <GroupLeft>{children}</GroupLeft>;
};

Header.Input = function HeaderInput(props: HeaderTypes.HeaderInput) {
  const { onChange, onSubmit, value } = props;

  return (
    <Form onSubmit={onSubmit}>
      <Icon src="/images/header/search.svg" alt="Search" />
      <Input
        placeholder="Enter GitHub username"
        onChange={onChange}
        value={value}
      />
    </Form>
  );
};
