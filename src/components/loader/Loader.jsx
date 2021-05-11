import React from 'react';
import { Container, LockBody, ReleaseBody, Spinner } from './styles/loader';

export default function Loader(props) {
  return (
    <Container>
      <LockBody />
      <Spinner />
    </Container>
  );
}

Loader.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
