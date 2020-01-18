import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes/routes';
import Loader from './Loader/Loader';
import { refresh } from '../redux/session/sessionOperations';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

class App extends Component {
  static propTypes = {
    refreshUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { refreshUser } = this.props;
    refreshUser();
  }

  render() {
    const { isLoading } = this.props;
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
        {isLoading && <Loader />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.global.loading,
});

const mapDispatchToProps = {
  refreshUser: refresh,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
