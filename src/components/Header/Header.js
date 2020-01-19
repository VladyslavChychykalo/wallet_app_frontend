import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import styles from './Header.module.css';
import LogoIMG from '../../images/logo.svg';
import LogoutModal from '../LogoutModal/LogoutModal';
import UserLogout from '../UserLogout/UserLogout';
import UserInfo from '../UserInfo/UserInfo';
import tips from './tips';

const Header = () => {
  const isModalLogout = useSelector(state => state.session.isModalLogout);
  const isUserLogged = useSelector(state => state.session.isloged);
  const windowWidth = document.documentElement.clientWidth;
  return (
    <div className={styles.header}>
      <div className={styles.Logo_box}>
        <img src={LogoIMG} className={styles.Logo_IMG} alt="Wallet" data-tip />
        <ReactTooltip
          className={styles.tooltip}
          effect="solid"
          place="bottom"
          event="click focus"
          offset={
            windowWidth >= 768 ? { top: 0, right: 50 } : { top: 0, right: 140 }
          }
          globalEventOff="mouseout"
          getContent={() => tips[Math.floor(Math.random() * tips.length)]}
        />
        <Link to="/" alt="homepage" className={styles.Logo_link}>
          <h1 className={styles.title}>Wallet</h1>
        </Link>
      </div>

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
