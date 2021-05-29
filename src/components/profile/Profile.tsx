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
import { TProfile } from '../../types/components';

export default function Profile(props: TProfile.Inner) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Profile.Image = function ProfileImage(props: TProfile.Image) {
  const { src, alt } = props;

  return <Image src={src} alt={alt} />;
};

Profile.Info = function ProfileInfo(props: TProfile.Inner) {
  const { children } = props;

  return <Info>{children}</Info>;
};

Profile.Name = function ProfileName(props: TProfile.Inner) {
  const { children } = props;

  return <Name>{children}</Name>;
};

Profile.Link = function ProfileLink(props: TProfile.Link) {
  const { children, href } = props;

  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
};

Profile.Group = function ProfileGroup(props: TProfile.Inner) {
  const { children } = props;

  return <Group>{children}</Group>;
};

Profile.Item = function ProfileItem(props: TProfile.Item) {
  const { children, src, alt } = props;

  return (
    <Item>
      <Icon src={src} alt={alt} />
      {children}
    </Item>
  );
};
