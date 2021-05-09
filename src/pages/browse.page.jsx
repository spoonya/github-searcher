import React from 'react';
import {
  HeaderContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import { Container } from '../components';

export default function Browse() {
  return (
    <>
      <HeaderContainer />
      <Container>
        <ProfileContainer />
        <RepositoryContainer />
      </Container>
    </>
  );
}
