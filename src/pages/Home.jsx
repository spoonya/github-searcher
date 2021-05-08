import React from 'react';
import HeaderContainer from '../containers/Header';
import { Container } from '../components';
import ProfileContainer from '../containers/Profile';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <Container>
        <ProfileContainer />
      </Container>
    </>
  );
}
