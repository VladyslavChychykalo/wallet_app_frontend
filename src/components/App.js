import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routes from '../routes/routes';
import Loader from './Loader/Loader';

const App = props => {
  const { isLoading } = props;
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path={routes.LOGIN_PAGE.path}
            component={routes.LOGIN_PAGE.component}
          />
          <Route
            exact
            path={routes.REGISTER_PAGE.path}
            component={routes.REGISTER_PAGE.component}
          />
          <Route
            path={routes.DASHBOARD_PAGE.path}
            component={routes.DASHBOARD_PAGE.component}
          />
          <Redirect to={routes.LOGIN_PAGE.path} />
        </Switch>
      </BrowserRouter>
      {isLoading && <Loader />}
    </>
  );
};
const mapStateToProps = state => ({
  isLoading: state.global.loading,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
