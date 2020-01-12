import React from 'react';
import { useDispatch } from 'react-redux';
import { SetIsModalLogoutOpen } from '../../redux/global/globalOperations';
import { ReactComponent as LogoutSvg } from '../../assets/icons/logout-2/logout.svg';
import style from './UserLogout.module.css';

const UserLogout = () => {
  const dispatch = useDispatch();
  const openModalLogout = () => dispatch(SetIsModalLogoutOpen());

  return (
    <>
      <button
        type="button"
        onClick={() => openModalLogout()}
        className={style.logout_btn}
      >
        <LogoutSvg className={style.logoutSvg} />
        <p className={style.logoutP}>Log out</p>
      </button>
    </>
  );
};

export default UserLogout;
