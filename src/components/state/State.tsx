import { Container, Inner, Text, Image } from './styles/state';
import { TState } from '../../types/components';

export default function State(props: TState.Inner) {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

State.Image = function StateImage(props: TState.Image) {
  const { src, alt } = props;

  return <Image src={src} alt={alt} />;
};

State.Text = function StateText(props: TState.Inner) {
  const { children } = props;

  return <Text>{children}</Text>;
};
