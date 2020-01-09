import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home/baseline-home-24px.svg';
import { ReactComponent as Diagrams } from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
import { ReactComponent as Currency } from '../../assets/icons/currencyExchange/baseline-attach_money-24px.svg';
import styles from './Navigation.module.css';

const Navigation = () => {
  const windowWidth = document.documentElement.clientWidth;

  return (
    <>
      <div className={styles.linkBox}>
        <NavLink
          to="/home"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <div className={styles.svg}>
            <Home fill="white" />
          </div>
          <span className={styles.text}>Home</span>
          <div className={styles.after}>|</div>
        </NavLink>
      </div>
      <div className={styles.linkBox}>
        <NavLink
          to="/diagram"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <div className={styles.svg}>
            <Diagrams fill="white" />
          </div>
          <span className={styles.text}>Statistic</span>
          <div className={styles.after}>|</div>
        </NavLink>
      </div>
      {windowWidth < 768 && (
        <div className={styles.linkBox}>
          <NavLink
            to="/currency"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <div className={styles.svg}>
              <Currency fill="white" />
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navigation;
