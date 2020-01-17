import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as sessionSelectors from '../../redux/session/sessionSelectors';

const ProtectedRoute = ({ component: Component, ...restProps }) => {
  const isAuthenticated = useSelector(store =>
    sessionSelectors.getIsAuth(store),
  );
  return (
    <Route {...restProps}>
      {isAuthenticated ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: restProps.location },
          }}
        />
      )}
    </Route>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default ProtectedRoute;
