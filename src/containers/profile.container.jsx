import React from 'react';
import { Profile } from '../components';
import NouserContainer from './nouser.container';

export default function ProfileContainer(props) {
  const { id, image, name, login, loginUrl, followers, following } = props;

  return (
    <>
      {id ? (
        <Profile>
          <Profile.Image src={image} alt={login} />
          <Profile.Info>
            <Profile.Name>{name}</Profile.Name>
            <Profile.Link href={loginUrl}>{login}</Profile.Link>
            <Profile.Group>
              <Profile.Item src="images/profile/followers.svg" alt="Followers">
                {followers === 1
                  ? `${followers} follower`
                  : `${followers} followers`}
              </Profile.Item>
              <Profile.Item src="images/profile/following.svg" alt="Following">
                {following} following
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
