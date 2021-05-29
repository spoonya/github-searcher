import { Container, Spinner } from './styles/loader';

type Props = {
  fullHeight?: boolean;
};

export default function Loader({ fullHeight }: Props) {
  return (
    <Container fullHeight={fullHeight}>
      <Spinner />
    </Container>
  );
}
