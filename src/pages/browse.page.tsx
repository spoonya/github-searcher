import {
  HeaderContainer,
  InitialContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import { Container } from '../components';
import { useTypedSelector } from '../hooks';

export default function Browse() {
  const { query } = useTypedSelector(({ user }) => user);

  return (
    <>
      <HeaderContainer />
      <Container>
        {query ? (
          <>
            <ProfileContainer />
            <RepositoryContainer />
          </>
        ) : (
          <InitialContainer />
        )}
      </Container>
    </>
  );
}
