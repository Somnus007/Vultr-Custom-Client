import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routesMap';
import Layout from '../layouts';
import GlobalLoading from '../components/GlobalLoading/GlobalLoading';
import { history } from '../redux';

class Router extends React.PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Suspense fallback={<GlobalLoading />}>
          <Layout>
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
          </Layout>
        </Suspense>
      </ConnectedRouter>
    );
  }
}

export default Router;
