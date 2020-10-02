import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contact from '../pages/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Contact} />
    </Switch>
  );
}