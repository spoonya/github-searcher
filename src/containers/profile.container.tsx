import { Profile } from '../components';
import NouserContainer from './nouser.container';
import { prettifyNumber } from '../helpers';
import { useTypedSelector } from '../hooks';

export default function ProfileContainer() {
  const { user } = useTypedSelector(({ user }) => user);

  return (
    <>
      {user.id ? (
        <Profile>
          <Profile.Image src={user.avatar_url} alt={user.login} />
          <Profile.Info>
            <Profile.Name>{user.name}</Profile.Name>
            <Profile.Link href={user.html_url}>{user.login}</Profile.Link>
            <Profile.Group>
              <Profile.Item src="images/profile/followers.svg" alt="Followers">
                {user.followers === 1
                  ? `${user.followers} follower`
                  : `${prettifyNumber(user.followers)} followers`}
              </Profile.Item>
              <Profile.Item src="images/profile/following.svg" alt="Following">
                {prettifyNumber(user.following)} following
              </Profile.Item>
            </Profile.Group>
          </Profile.Info>
        </Profile>
      ) : (
        <NouserContainer />
      )}
    </>
  );
}
