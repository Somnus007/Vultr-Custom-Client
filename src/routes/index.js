import React, { Suspense } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import routes from './routesMap';
import Layout from '../layouts';

class Router extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map(route => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                  exact={route.exact}
                />
              ))}
              <Redirect from="/" exact to="/login" />
              <Redirect from="/**" to="/404" />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Router;
