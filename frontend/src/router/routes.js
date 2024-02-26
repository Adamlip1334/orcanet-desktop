// App.js or where you set up your routes
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import Dashboard from './layout/Dashboard/Dashboard'; // Adjust the path as necessary
import Transfers from '../pages/Transfers'; // Adjust the path as necessary
import Discover from '../pages/Discover'; // Adjust the path as necessary

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/transfers" />
        </Route>
        <Route path="/transfers">
          {/* <Dashboard> */}
            <Transfers />
          {/* </Dashboard> */}
        </Route>
        <Route path="/discover">
          {/* <Dashboard> */}
            <Discover />
          {/* </Dashboard> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default routes;
