import React from 'react';
import { Container, Inner, Text, Image } from './styles/state';

export default function State(props) {
  const { children } = props;

  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

State.Image = function InitImage(props) {
  const { src, alt } = props;

  return <Image src={src} alt={alt} />;
};

State.Text = function InitText(props) {
  const { children } = props;

  return <Text>{children}</Text>;
};
