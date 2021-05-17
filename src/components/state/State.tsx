import { Container, Inner, Text, Image } from './styles/state';
import { StateTypes } from '../../types/components';

export default function State(props: StateTypes.State) {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

State.Image = function StateImage(props: StateTypes.StateImage) {
  const { src, alt } = props;

  return <Image src={src} alt={alt} />;
};

State.Text = function StateText(props: StateTypes.State) {
  const { children } = props;

  return <Text>{children}</Text>;
};
