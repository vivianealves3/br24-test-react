import React from 'react';
import { Switch } from 'react-router-dom';

import Form from '../views/Form';
import List from '../views/List';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/create" component={Form} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
