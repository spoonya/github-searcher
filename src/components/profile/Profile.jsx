import React from 'react';
import {
  Container,
  Image,
  Info,
  Name,
  Link,
  Group,
  Item,
  Icon,
} from './styles/profile';

export default function Profile(props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Profile.Image = function ProfileImage(props) {
  const { src, alt } = props;

  return <Image src={src} alt={alt} />;
};

Profile.Info = function ProfileInfo(props) {
  const { children } = props;

  return <Info>{children}</Info>;
};

Profile.Name = function ProfileName(props) {
  const { children } = props;

  return <Name>{children}</Name>;
};

Profile.Link = function ProfileLink(props) {
  const { children, href } = props;

  return <Link href={href}>{children}</Link>;
};

Profile.Group = function ProfileGroup(props) {
  const { children } = props;

  return <Group>{children}</Group>;
};

Profile.Item = function ProfileItem(props) {
  const { children, src, alt } = props;

  return (
    <Item>
      <Icon src={src} alt={alt} />
      {children}
    </Item>
  );
};