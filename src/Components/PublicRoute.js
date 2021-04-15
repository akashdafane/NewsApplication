import React from 'react';

import {
  Route,
  Redirect
} from 'react-router-dom';

const PublicRoute = ({component: DashboardRoute}) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      render={() => (
        <>
          {token === null ? (
            <Redirect to="/" />
          ) : (
              <DashboardRoute />
            )}
        </>
      )}
    />
  );
};
export default PublicRoute;