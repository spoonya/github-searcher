import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes.constant';
import Browse from './pages/browse.page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.BROWSE} exact component={Browse} />
      </Switch>
    </Router>
  );
}

export default App;
