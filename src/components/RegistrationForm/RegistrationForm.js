import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, getIn } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import * as sessionOperations from '../../redux/session/sessionOperations';
import styles from './RegistrationForm.module.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as EmailIcon } from '../../images/emailIcon.svg';
import { ReactComponent as PasswordIcon } from '../../images/passwordIcon.svg';
import { ReactComponent as NameIcon } from '../../images/nameIcon.svg';
import {
  strengthColor,
  strengthIndicator,
} from './strengthPassword/strengthPassword';
import './strengthPassword/strengthPassword.css';
import 'react-toastify/dist/ReactToastify.css';
import { getError } from '../../redux/session/sessionSelectors';

const RegistrationSchema = yup.object().shape({
  person: yup.object().shape({
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
  passwordConfirmed: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is required'),
});

class RegistrationForm extends Component {
  static defaultProps = {
    isError: null,
  };

  static propTypes = {
    onRegistration: PropTypes.func.isRequired,
    isError: PropTypes.shape({}),
  };

  componentDidUpdate() {
    const { isError } = this.props;
    if (isError !== null) {
      this.existingUser();
    }
  }

  notMatchingPasswords = () => {
    toast.error('Passwords dont match');
  };

  existingUser = () => {
    toast.error('Such user has already existed');
  };

  render() {
    return (
      <Formik
        initialValues={{
          person: { email: '', password: '', name: '' },
          passwordConfirmed: '',
        }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { resetForm }) => {
          const { onRegistration } = this.props;
          if (values.person.password !== values.passwordConfirmed) {
            this.notMatchingPasswords();
            resetForm();
            return;
          }

          setTimeout(() => {
            onRegistration(values.person);
            resetForm();
          }, 1000);
        }}
      >
        {({ touched, errors, isSubmitting, values }) => {
          const strength = strengthIndicator(values.person.password);
          const color = strengthColor(strength);
          return (
            <>
              <div className={styles.backgroundContainer}>
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
                      name="person.email"
                      placeholder="Email"
                    />
                    <EmailIcon className={styles.registrationIcon} />
                    {getIn(touched, 'person.email') &&
                      getIn(errors, 'person.email') && (
                        <p className={styles.error}>
                          {getIn(errors, 'person.email')}
                        </p>
                      )}
                  </div>
                  <div className={styles.inputWithIcon}>
                    <Field
                      className={styles.input}
                      type="password"
                      name="person.password"
                      placeholder="Password"
                    />
                    <PasswordIcon className={styles.registrationIcon} />
                    {getIn(touched, 'person.password') &&
                      getIn(errors, 'person.password') && (
                        <p className={styles.error}>
                          {getIn(errors, 'person.password')}
                        </p>
                      )}
                  </div>
                  <div className={styles.inputWithIcon}>
                    <Field
                      className={styles.input}
                      type="password"
                      name="passwordConfirmed"
                      placeholder="Confirm password"
                    />
                    <PasswordIcon className={styles.registrationIcon} />
                    {touched.passwordConfirmed && errors.passwordConfirmed && (
                      <p className={styles.error}>{errors.passwordConfirmed}</p>
                    )}
                    <div className={`meter ${color}`}>
                      <span className="indicator" />
                    </div>
                  </div>
                  <div className={styles.inputWithIcon}>
                    <Field
                      className={styles.input}
                      type="name"
                      name="person.name"
                      placeholder="Your Name"
                    />
                    <NameIcon className={styles.registrationIcon} />
                  </div>
                  {/* <a href="https://cryptic-citadel-50371.herokuapp.com/api/auth/google">
                    <Logo className={styles.logo} />
                  </a> */}
                  <button
                    className={styles.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Registration
                  </button>
                </Form>
                <Link className={styles.link} to="/login">
                  Login
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
  onRegistration: sessionOperations.registration,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
