import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes.constant';
import Browse from './pages/browse.page';

function App() {
  return <Route path={ROUTES.BROWSE} exact component={Browse} />;
}

export default App;
