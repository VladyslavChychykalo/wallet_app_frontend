import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sessionOperations from '../../redux/session/sessionOperations';
import styles from './LoginForm.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as EmailIcon } from '../../images/emailIcon.svg';
import { ReactComponent as PasswordIcon } from '../../images/passwordIcon.svg';
import { getError } from '../../redux/session/sessionSelectors';

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email not valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is required'),
});

class LoginForm extends Component {
  static defaultProps = {
    isError: null,
  };

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    isError: PropTypes.shape({}),
  };

  componentDidUpdate() {
    const { isError } = this.props;
    if (isError !== null) {
      this.wrongPasswordOrEmail();
    }
  }

  wrongPasswordOrEmail = () => {
    toast.error('Password or Email is wrong');
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          const { onLogin } = this.props;
          setTimeout(() => {
            onLogin(values);
            resetForm();
          }, 1000);
        }}
      >
        {({ touched, errors, isSubmitting }) => {
          return (
            <>
              <div className={styles.backgroundLogin}>
                <p className={styles.name}>Finance App</p>
              </div>
              <div className={styles.container}>
                <div className={styles.logoContainer}>
                  <Logo className={styles.logo} />
                  <h1 className={styles.title}>Wallet</h1>
                </div>
                <Form autoComplete="off">
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
                  <button
                    className={styles.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
                <Link className={styles.link} to="/register">
                  Registration
                </Link>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
              />
            </>
          );
        }}
      </Formik>
    );
  }
}

const mapStateToProps = state => ({
  isError: getError(state),
});

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
