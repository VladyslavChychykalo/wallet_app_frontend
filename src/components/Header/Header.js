import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import LogoIMG from '../../images/logo.svg';
import LogoutModal from '../LogoutModal/LogoutModal';
import UserLogout from '../UserLogout/UserLogout';
import UserInfo from '../UserInfo/UserInfo';

const Header = () => {
  const isModalLogout = useSelector(state => state.session.isModalLogout);
  const isUserLogged = useSelector(state => state.session.isloged);
  return (
    <div className={styles.header}>
      <Link to="/" alt="homepage" className={styles.Logo_link}>
        <img src={LogoIMG} className={styles.Logo_IMG} alt="Wallet" />
        <h1 className={styles.title}>Wallet</h1>
      </Link>
      {!isUserLogged && (
        <div className={styles.user_logout_div}>
          <UserInfo />
          <UserLogout />
          {isModalLogout && <LogoutModal />}
        </div>
      )}
    </div>
  );
};

export default Header;
