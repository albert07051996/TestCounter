import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as path from './paths';
import { CounterPage } from '../Pages/CounterPage';




const routes = [
  {
    path: path.HOME_PATH,
    redirect: path.COUNTER_PAGE,
  },
  {
    path: path.COUNTER_PAGE,
    component: <CounterPage />,
    key: path.COUNTER_PAGE,
  },

];
const renderNestedRoutes = r => {
  return (
    <Route
      element={r.redirect ? <Navigate replace to={r.redirect} /> : r.component}
      // element={r.component}
      path={r.path}
      key={r.key}
    >
      {r.children
        ? r.children.map(d => {
          return renderNestedRoutes(d);
        })
        : null}
    </Route>
  );
};

export const RouterList = () => {
  return (
    <Routes>
      {routes.map(r => {
        return renderNestedRoutes(r);
      })}
    </Routes>
  );
};