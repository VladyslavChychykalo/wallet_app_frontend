import React from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { SetIsModalLogoutOpen } from '../../redux/global/globalOperations';
import PropTypes from 'prop-types';
import { ReactComponent as LogoutSvg } from '../../assets/icons/logout-2/logout.svg';
import { logOut } from '../../redux/session/sessionOperations';
import style from './UserLogout.module.css';

const UserLogout = ({ onLogOut }) => {
  // const dispatch = useDispatch();
  // const openModalLogout = () => dispatch(SetIsModalLogoutOpen());

  return (
    <>
      <Link to="/login">
        <button
          type="button"
          // onClick={() => openModalLogout()}
          onClick={onLogOut}
          className={style.logout_btn}
        >
          <LogoutSvg className={style.logoutSvg} />
          <p className={style.logoutP}>Log out</p>
        </button>
      </Link>
    </>
  );
};

UserLogout.propTypes = {
  onLogOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogOut: logOut,
};

export default connect(null, mapDispatchToProps)(UserLogout);
