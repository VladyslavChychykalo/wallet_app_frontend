import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './UserInfo.module.css';
import { getUser, getIsAuth } from '../../redux/session/sessionSelectors';

const UserInfo = ({ user, authenticated }) => {
  return <div className={s.user_page_block}>{authenticated && user.name}</div>;
};

UserInfo.propTypes = {
  user: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authenticated: getIsAuth(state),
  user: getUser(state),
});

export default connect(mapStateToProps)(UserInfo);
