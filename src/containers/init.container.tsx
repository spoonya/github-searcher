import { State } from '../components';

export default function InitialContainer() {
  return (
    <State fullHeight>
      <State.Image src="/images/states/init.svg" alt="Start search" />
      <State.Text>Start with searching a GitHub user</State.Text>
    </State>
  );
}
