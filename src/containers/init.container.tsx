import { State } from '../components';

export default function InitialContainer() {
  return (
    <State>
      <State.Image src="/images/states/init.svg" alt="Start search" />
      <State.Text>Start with searching a GitHub user</State.Text>
    </State>
  );
}
