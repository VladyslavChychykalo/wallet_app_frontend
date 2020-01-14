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
      <NavLink
        to="/home"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Home className={styles.svg} />
        <span className={styles.text}>Home</span>
      </NavLink>
      <NavLink
        to="/diagram"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Diagrams className={styles.svg} />
        <span className={styles.text}>Statistic</span>
      </NavLink>
      {windowWidth < 768 && (
        <NavLink
          to="/currency"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <Currency className={styles.svg} />
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
