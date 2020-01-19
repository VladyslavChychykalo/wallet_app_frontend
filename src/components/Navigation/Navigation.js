import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Home } from '../../assets/icons/home/baseline-home-24px.svg';
import { ReactComponent as Diagrams } from '../../assets/icons/diagrams/baseline-timeline-24px.svg';
import { ReactComponent as Currency } from '../../assets/icons/currencyExchange/baseline-attach_money-24px.svg';
import styles from './Navigation.module.css';

const Navigation = ({ location }) => {
  const windowWidth = document.documentElement.clientWidth;
  const isHomePage = location.pathname;
  // bool mobile or desktop
  const isWidthTrue = windowWidth > 1280 || windowWidth <= 768;
  // bool tablet and url /home
  const isTabHome =
    isHomePage === '/home' && windowWidth < 1280 && windowWidth >= 768;
  // bool tablet and url /diagram
  const isTabDiagram =
    isHomePage === '/diagram' && windowWidth < 1280 && windowWidth >= 768;
  return (
    <>
      <NavLink
        to="/home"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        {isWidthTrue ? (
          <Home className={styles.svg} fill="#ffffff" />
        ) : (
          <Home
            className={styles.svg}
            fill={isTabHome ? '#3a5374' : '#6b7d83'}
          />
        )}
        <span className={styles.text}>Home</span>
      </NavLink>
      <NavLink
        to="/diagram"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        {isWidthTrue ? (
          <Diagrams className={styles.svg} fill="#ffffff" />
        ) : (
          <Diagrams
            className={styles.svg}
            fill={isTabDiagram ? '#3a5374' : '#6b7d83'}
          />
        )}
        {/* <Diagrams fill="#cc0000" className={styles.svg} /> */}
        <span className={styles.text}>Statistic</span>
      </NavLink>
      {windowWidth < 768 && (
        <NavLink
          to="/currency"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          <Currency className={styles.svg} fill="#ffffff" />
        </NavLink>
      )}
    </>
  );
};

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Navigation;
