import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const RegistrationPage = () => (
  <div>
    <RegistrationForm />
  </div>
);

export default withAuthRedirect(RegistrationPage);
