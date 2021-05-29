import { Inner } from './styles/container';
import { TContainer } from '../../types/components';

export default function Container(props: TContainer.Inner) {
  const { children } = props;

  return <Inner>{children}</Inner>;
}
