import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as sessionSelectores from '../../redux/session/sessionSelectors';

class LoginPage extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    history: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const { isAuth, history } = this.props;
    if (isAuth) {
      history.replace('/');
    }
  }

  componentDidUpdate() {
    const { isAuth, history } = this.props;
    if (isAuth) {
      history.replace('/');
    }
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: sessionSelectores.getIsAuth(state),
});
export default connect(mapStateToProps)(LoginPage);
