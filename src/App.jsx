import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
