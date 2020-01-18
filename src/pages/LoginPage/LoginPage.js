import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default withAuthRedirect(LoginPage);
