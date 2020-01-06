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
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sessionOperations from '../../redux/session/sessionOperations';
import styles from './LoginForm.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as EmailIcon } from '../../images/emailIcon.svg';
import { ReactComponent as PasswordIcon } from '../../images/passwordIcon.svg';

const LoginForm = ({ errors, touched, isSubmitting }) => (
  <>
    <div className={styles.backgroundLogin}>
      <p className={styles.name}>Finance App</p>
    </div>
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
        <h1 className={styles.title}>Wallet</h1>
      </div>
      <Form>
        <div className={styles.inputWithIcon}>
          <Field
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <EmailIcon className={styles.loginIcon} />
          {touched.email && errors.email && (
            <p className={styles.error}>{errors.email}</p>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <Field
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <PasswordIcon className={styles.loginIcon} />
          {touched.password && errors.password && (
            <p className={styles.error}>{errors.password}</p>
          )}
        </div>
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
      <Link className={styles.link} to="/register">
        Registration
      </Link>
    </div>
  </>
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
      .min(6, 'Password must be at least 6 characters')
      .max(12, 'Password must be at most 12 characters')
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
