import { Container, Spinner } from './styles/loader';

import { TLoader } from '../../types/components';

function Loader(props: TLoader.Inner) {
  const { topZindex, fullHeight } = props;

  return (
    <Container topZindex={topZindex} fullHeight={fullHeight}>
      <Spinner />
    </Container>
  );
}

export default Loader;
