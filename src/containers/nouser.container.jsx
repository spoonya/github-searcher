import React from 'react';
import { State } from '../components';

export default function NouserContainer() {
  return (
    <State>
      <State.Image src="/images/states/no-user.svg" alt="Not found" />
      <State.Text>User not found</State.Text>
    </State>
  );
}
