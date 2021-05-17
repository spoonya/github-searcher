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
import { ProfileTypes } from '../../types/components';

export default function Profile(props: ProfileTypes.Profile) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Profile.Image = function ProfileImage(props: ProfileTypes.ProfileImage) {
  const { src, alt } = props;

  return <Image src={src} alt={alt} />;
};

Profile.Info = function ProfileInfo(props: ProfileTypes.Profile) {
  const { children } = props;

  return <Info>{children}</Info>;
};

Profile.Name = function ProfileName(props: ProfileTypes.Profile) {
  const { children } = props;

  return <Name>{children}</Name>;
};

Profile.Link = function ProfileLink(props: ProfileTypes.ProfileLink) {
  const { children, href } = props;

  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
};

Profile.Group = function ProfileGroup(props: ProfileTypes.Profile) {
  const { children } = props;

  return <Group>{children}</Group>;
};

Profile.Item = function ProfileItem(props: ProfileTypes.ProfileItem) {
  const { children, src, alt } = props;

  return (
    <Item>
      <Icon src={src} alt={alt} />
      {children}
    </Item>
  );
};
