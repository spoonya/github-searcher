import {
  HeaderContainer,
  InitialContainer,
  ProfileContainer,
  RepositoryContainer,
} from '../containers';
import { Container } from '../components';
import { Loader } from '../components/';
import { useTypedSelector } from '../hooks';

export default function Browse() {
  const { query, isUserLoading } = useTypedSelector(({ user }) => user);

  return (
    <>
      <HeaderContainer />
      <Container>
        {query ? (
          <>
            {isUserLoading ? <Loader /> : null}
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
