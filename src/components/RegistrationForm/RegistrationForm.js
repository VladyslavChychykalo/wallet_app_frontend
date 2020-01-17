import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const RegistrationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email not valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is required'),
  passwordConfirmed: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is required'),
  name: yup.string(),
});

// const RegistrationSchema = yup.object({
//   person: yup.object({
//     email: yup
//       .string()
//       .email('Email not valid')
//       .required('Email is required'),
//     password: yup
//       .string()
//       .min(6, 'Password must be at least 6 characters')
//       .max(12, 'Password must be at most 12 characters')
//       .required('Password is required'),
//     passwordConfirmed: yup
//       .string()
//       .min(6, 'Password must be at least 6 characters')
//       .max(12, 'Password must be at most 12 characters')
//       .required('Password is required'),
//     name: yup.string(),
//   }),
// });

const RegistrationForm = ({ onRegistration }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      name: '',
    }}
    validationSchema={RegistrationSchema}
    onSubmit={(values, { resetForm }) => {
      console.log(values);
      setTimeout(() => {
        onRegistration(values);
        resetForm();
      }, 1000);
    }}
  >
    {({ touched, errors, isSubmitting, values }) => {
      const strength = strengthIndicator(values.password);
      const color = strengthColor(strength);
      console.log(touched, errors);
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
                  name="passwordConfirmed"
                  // name="password"
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
                  name="name"
                  placeholder="Your Name"
                />
                <NameIcon className={styles.registrationIcon} />
              </div>
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
        </>
      );
    }}
  </Formik>
);

// const RegistrationForm = ({ onRegistration }) => (
//   <Formik
//     initialValues={{
//       person: { email: '', password: '', name: '' },
//       passwordConfirmed: '',
//     }}
//     validationSchema={RegistrationSchema}
//     onSubmit={(values, { resetForm }) => {
//       console.log(values.person);
//       if (values.person.password !== values.passwordConfirmed) {
//         alert('Not this time');
//         return;
//       }
//       setTimeout(() => {
//         onRegistration(values.person);
//         resetForm();
//       }, 1000);
//     }}
//   >
//     {({ touched, errors, isSubmitting, values }) => {
//       const strength = strengthIndicator(values.person.password);
//       const color = strengthColor(strength);
//       console.log(touched, errors.person);
//       return (
//         <>
//           <div className={styles.backgroundContainer}>
//             <p className={styles.name}>Finance App</p>
//           </div>
//           <div className={styles.container}>
//             <div className={styles.logoContainer}>
//               <Logo className={styles.logo} />
//               <h1 className={styles.title}>Wallet</h1>
//             </div>
//             <Form autoComplete="off">
//               <div className={styles.inputWithIcon}>
//                 <Field
//                   className={styles.input}
//                   type="email"
//                   name="person.email"
//                   placeholder="Email"
//                 />
//                 <EmailIcon className={styles.registrationIcon} />
//                 {touched.email && errors.email && (
//                   <p className={styles.error}>{errors.email}</p>
//                 )}
//               </div>
//               <div className={styles.inputWithIcon}>
//                 <Field
//                   className={styles.input}
//                   type="password"
//                   name="person.password"
//                   placeholder="Password"
//                 />
//                 <PasswordIcon className={styles.registrationIcon} />
//                 {touched.password && errors.password && (
//                   <p className={styles.error}>{errors.password}</p>
//                 )}
//               </div>
//               <div className={styles.inputWithIcon}>
//                 <Field
//                   className={styles.input}
//                   type="password"
//                   name="passwordConfirmed"
//                   // name="password"
//                   placeholder="Confirm password"
//                 />
//                 <PasswordIcon className={styles.registrationIcon} />
//                 {touched.passwordConfirmed && errors.passwordConfirmed && (
//                   <p className={styles.error}>{errors.passwordConfirmed}</p>
//                 )}
//                 <div className={`meter ${color}`}>
//                   <span className="indicator" />
//                 </div>
//               </div>
//               <div className={styles.inputWithIcon}>
//                 <Field
//                   className={styles.input}
//                   type="name"
//                   name="person.name"
//                   placeholder="Your Name"
//                 />
//                 <NameIcon className={styles.registrationIcon} />
//               </div>
//               <button
//                 className={styles.button}
//                 type="submit"
//                 disabled={isSubmitting}
//               >
//                 Registration
//               </button>
//             </Form>
//             <Link className={styles.link} to="/login">
//               Login
//             </Link>
//           </div>
//         </>
//       );
//     }}
//   </Formik>
// );

RegistrationForm.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRegistration: sessionOperations.registration,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
