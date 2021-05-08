import React from 'react';
import { Inner } from './styles/container';

export default function Container(props) {
  const { children } = props;

  return <Inner>{children}</Inner>;
}
