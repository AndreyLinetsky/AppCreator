import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes/routes';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ component, path, exact }, key) => (
          <Route {...{ key, component, path, exact }} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
