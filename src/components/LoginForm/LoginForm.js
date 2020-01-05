// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import * as sessionOperations from '../../redux/session/sessionOperations';

// class LoginForm extends Component {
//   state = { email: '', password: '' };

//   static propTypes = {
//     onLogin: PropTypes.func.isRequired,
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin({ ...this.state });

//     this.setState({ email: '', password: '' });
//   };

//   onChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <form onSubmit={this.onSubmit} action="">
//         <input
//           type="email"
//           value={email}
//           onChange={this.onChange}
//           name="email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={this.onChange}
//           name="password"
//         />
//         <button type="submit">Enter</button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: sessionOperations.login,
// };

// export default connect(null, mapDispatchToProps)(LoginForm);

// ================================================================================

import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sessionOperations from '../../redux/session/sessionOperations';

const LoginForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div>
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div>
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
    </div>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Email not valid')
      .required('Email is required'),
    password: yup
      .string()
      .min(6)
      .max(12)
      .required('Password is required'),
  }),
  handleSubmit(values, { props, resetForm }) {
    setTimeout(() => {
      props.onLogin(values);
      resetForm();
    }, 1000);
  },
})(LoginForm);

LoginForm.propTypes = {
  errors: PropTypes.string.isRequired,
  touched: PropTypes.string.isRequired,
  isSubmitting: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default connect(null, mapDispatchToProps)(FormikLoginForm);
