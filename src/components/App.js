import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';
import AddTransactionForm from './AddTransaction/AddTransactionForm/AddTransactionForm';
import TestLauncher from './AddTransaction/TestLauncher';

const App = () => {
  return (
    <>
      {/* <AddTransactionForm /> */}
      <TestLauncher>
        <AddTransactionForm />
      </TestLauncher>

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
};

export default App;
