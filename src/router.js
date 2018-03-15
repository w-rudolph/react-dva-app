import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import routes from './routesMap';
import PATHS from './constants/routerPath';

const dynamicComponet = (app, pagePath, modelPath) => {
  const newComponent = {
    app,
    component: () => import(`${pagePath}`),
  };
  if(modelPath) {
    newComponent.models = () => [import(`${modelPath}`)]
  }
  return dynamic(newComponent);
};

const RouterConfig = app => ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route key={index} path={route.path} exact={route.exact} component={dynamicComponet(app, route.page, route.model)} />
          )
        })}
        <Redirect to={PATHS.NOT_FOUND_PAGE} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
