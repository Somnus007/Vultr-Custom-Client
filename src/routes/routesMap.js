import React from 'react';

const routes = [
  {
    path: '/login',
    component: React.lazy(() => import('../pages/Login/Login')),
    exact: true,
  },
  {
    path: '/projects',
    component: React.lazy(() => import('../pages/Projects/Projects')),
    exact: true,
  },
  {
    path: '/documents',
    component: React.lazy(() => import('../pages/Documents/Documents')),
    exact: true,
  },
  {
    path: '/jobAdmin',
    component: React.lazy(() => import('../pages/JobAdmin/JobAdmin')),
    exact: true,
  },
  {
    path: '/userManagement',
    component: React.lazy(() =>
      import('../pages/UserManagement/UserManagement')
    ),
    exact: true,
  },
  {
    path: '/404',
    component: React.lazy(() => import('../pages/Errors/404')),
    exact: true,
  },
  {
    path: '/500',
    component: React.lazy(() => import('../pages/Errors/500')),
    exact: true,
  },
];

export default routes;
