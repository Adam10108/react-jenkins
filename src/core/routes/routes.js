import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Homepage from '../../containers/homepage';

const Routes = () => {
  return (
    <Router basename="react-jenkins">
      <Switch>
        {/* Homepaege */}
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
