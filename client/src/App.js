import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import { GlobalStyle } from './styles/appDefaultStyles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          {routes.map(({ component, path }) => (
            <Route {...{ component, path }} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}
