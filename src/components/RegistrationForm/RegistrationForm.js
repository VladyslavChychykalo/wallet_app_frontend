// import React, { Component } from 'react';

// export default class RegistrationForm extends Component {
//   state = { name: '', email: '', password: '' };

//   onSubmit = e => {
//     e.preventDefault();
//   };

//   onChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <form onSubmit={this.onSubmit} action="">
//         <input
//           type="email"
//           value={email}
//           onChange={this.onChange}
//           name="email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={this.onChange}
//           name="password"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={this.onChange}
//           name="password"
//         />
//         <input type="name" value={name} onChange={this.onChange} name="name" />
//         <button type="submit">Sign up</button>
//       </form>
//     );
//   }
// }

// ==============================================================================================================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sessionOperations from '../../redux/session/sessionOperations';
import styles from './RegistrationForm.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as EmailIcon } from '../../images/emailIcon.svg';
import { ReactComponent as PasswordIcon } from '../../images/passwordIcon.svg';
import { ReactComponent as NameIcon } from '../../images/nameIcon.svg';

const RegistrationForm = ({ errors, touched, isSubmitting }) => (
  <>
    <div className={styles.backgroundContainer}>
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
          <EmailIcon className={styles.registrationIcon} />
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
          <PasswordIcon className={styles.registrationIcon} />
          {touched.password && errors.password && (
            <p className={styles.error}>{errors.password}</p>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <Field
            className={styles.input}
            type="password"
            name="password"
            placeholder="Confirm password"
          />
          <PasswordIcon className={styles.registrationIcon} />
          {touched.password && errors.password && (
            <p className={styles.error}>{errors.password}</p>
          )}
        </div>
        <div className={styles.inputWithIcon}>
          <Field
            className={styles.input}
            type="name"
            name="name"
            placeholder="Your Name"
          />
          <NameIcon className={styles.registrationIcon} />
          {/* {touched.password && errors.password && (
            <p className={styles.error}>{errors.password}</p>
          )} */}
        </div>
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          Registration
        </button>
      </Form>
      <Link className={styles.link} to="/">
        Enter
      </Link>
    </div>
  </>
);

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ email, password, name }) {
    return {
      email: email || '',
      password: password || '',
      name: name || '',
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
    name: yup.string(),
  }),
  handleSubmit(values, { props, resetForm }) {
    setTimeout(() => {
      props.onRegistration(values);
      resetForm();
    }, 1000);
  },
})(RegistrationForm);

RegistrationForm.propTypes = {
  errors: PropTypes.string.isRequired,
  touched: PropTypes.string.isRequired,
  isSubmitting: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  onRegistration: sessionOperations.registration,
};

export default connect(null, mapDispatchToProps)(FormikRegistrationForm);
