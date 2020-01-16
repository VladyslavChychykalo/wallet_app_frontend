import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { refresh } from '../redux/session/sessionOperations';
import routes from '../routes/routes';

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
            <Route
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
