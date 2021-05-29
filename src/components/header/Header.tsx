import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Container,
  Inner,
  GroupLeft,
  GroupRight,
  Form,
  Input,
  Logo,
  Icon,
  Toggler,
} from './styles/header';
import { THeader } from '../../types/components';
import { THEME_CFG } from '../../constants/themes.constant';

export default function Header(props: THeader.Inner) {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Header.Logo = function HeaderLogo(props: THeader.Logo) {
  const { to, src, alt } = props;

  return (
    <ReactRouterLink to={to}>
      <Logo src={src} alt={alt} />
    </ReactRouterLink>
  );
};

Header.GroupLeft = function HeaderGroupLeft(props: THeader.Inner) {
  const { children } = props;

  return <GroupLeft>{children}</GroupLeft>;
};

Header.GroupRight = function HeaderGroupRight(props: THeader.Inner) {
  const { children } = props;

  return <GroupRight>{children}</GroupRight>;
};

Header.Input = function HeaderInput(props: THeader.Input) {
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

Header.Toggler = function HeaderToggler(props: THeader.Toggler) {
  const { theme, onClick } = props;

  return (
    <Toggler onClick={onClick}>
      {theme === THEME_CFG.light ? (
        <img src="/images/header/moon.svg" alt="Dark theme" />
      ) : (
        <img src="/images/header/sun.svg" alt="Light theme" />
      )}
    </Toggler>
  );
};
