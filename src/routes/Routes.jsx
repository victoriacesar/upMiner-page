import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MoreDetails } from '../pages/MoreDetails';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Home} />
        <Route exact path="/about/:id" component={MoreDetails} />
      </Switch>
    </BrowserRouter>
  );
}
