import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import * as SessionActions from '../../redux/session/sessionActions';
import * as SessionOperations from '../../redux/session/sessionOperations';

class LoginPage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string,
    }).isRequired,
    setTokenInStore: PropTypes.func.isRequired,
    refreshOperation: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { location, setTokenInStore, refreshOperation } = this.props;
    if (location && location.search) {
      const token = new URLSearchParams(location.search).get('token');
      setTokenInStore(token);
      refreshOperation();
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

const MDTP = dispatch => ({
  setTokenInStore: token => dispatch(SessionActions.setTokenInStore(token)),
  refreshOperation: () => dispatch(SessionOperations.refresh()),
});

export default withAuthRedirect(connect(null, MDTP)(LoginPage));
