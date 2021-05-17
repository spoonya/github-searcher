import { Inner } from './styles/container';
import { ContainerTypes } from '../../types/components';

export default function Container(props: ContainerTypes.Container) {
  const { children } = props;

  return <Inner>{children}</Inner>;
}
