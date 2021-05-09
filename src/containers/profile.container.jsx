import React from 'react';
import { Profile } from '../components';

export default function ProfileContainer() {
  return (
    <Profile>
      <Profile.Image src="images/profile/user.jpg" alt="User" />
      <Profile.Info>
        <Profile.Name>Dan Abramov</Profile.Name>
        <Profile.Link href="#">gaeron</Profile.Link>
        <Profile.Group>
          <Profile.Item src="images/profile/followers.svg" alt="Followers">
            65.8k followers
          </Profile.Item>
          <Profile.Item src="images/profile/following.svg" alt="Following">
            171 following
          </Profile.Item>
        </Profile.Group>
      </Profile.Info>
    </Profile>
  );
}
