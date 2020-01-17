import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { refresh } from '../redux/session/sessionOperations';
import routes from '../routes/routes';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

class App extends Component {
  static propTypes = {
    refreshUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { refreshUser } = this.props;
    refreshUser();
  }

  render() {
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
            <ProtectedRoute
              path={routes.DASHBOARD_PAGE.path}
              component={routes.DASHBOARD_PAGE.component}
            />
            <Redirect to={routes.LOGIN_PAGE.path} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapDispatchToProps = {
  refreshUser: refresh,
};

export default connect(null, mapDispatchToProps)(App);
