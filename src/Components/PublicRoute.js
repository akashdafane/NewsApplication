import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import PropsTypes from 'prop-types';

const PublicRoute = ({component: Component, ...rest}) => {
  
  const token = localStorage.getItem('token');
  return (
    <Route
    {...rest}
      render={(props) => (
        <>
          {token === null ? (
            <Redirect to="/" />
          ) : (
              <Component {...props}/>
            )}
        </>
      )}
    />
  );
};
PublicRoute.propTypes = {
  component : PropsTypes.func.isRequired
}
export default PublicRoute;