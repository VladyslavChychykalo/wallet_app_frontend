/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionSelectors from '../redux/session/sessionSelectors';

const withAuthRedirect = Component => {
  function WithAuthRedirect({ isAuth, ...restProps }) {
    return isAuth ? <Redirect to="/" /> : <Component {...restProps} />;
  }

  const mapStateToProps = state => ({
    isAuth: sessionSelectors.getIsAuth(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
