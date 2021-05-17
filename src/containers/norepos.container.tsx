import { State } from '../components';

export default function NoreposContainer() {
  return (
    <State>
      <State.Image src="/images/states/no-repos.svg" alt="Empty repositories" />
      <State.Text>Repository list is empty</State.Text>
    </State>
  );
}
