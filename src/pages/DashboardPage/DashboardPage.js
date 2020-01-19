/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './DashboardPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import HomeTab from '../../components/HomeTab/HomeTab';
import DiagramTab from '../../components/DiagramTab/index';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransactionConteiner';
import { openModalAddTransaction } from '../../redux/global/globalActions';
import getIsModalAddTransactionOpen from '../../redux/global/globalSelectors';
import {
  getFinanceDataFetch,
  getFinanceTotalBalanceFetch,
} from '../../redux/finance/financeOperations';

import { getUserId } from '../../redux/finance/financeSelectors';

class DashboardPage extends Component {
  static propTypes = {
    isModalAddTransactionOpen: PropTypes.bool.isRequired,
    openModalAddTransactionAction: PropTypes.func.isRequired,
    getFinanceDataFetch: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    pathname: PropTypes.string,
  };

  static defaultProps = {
    pathname: '/home',
  };

  componentDidMount() {
    const { getFinanceDataFetch, userId } = this.props;
    getFinanceDataFetch(userId);
  }

  render() {
    const { location } = this.props;

    const {
      isModalAddTransactionOpen,
      openModalAddTransactionAction,
    } = this.props;
    const windowWidth = document.documentElement.clientWidth;
    const isHomePage = location.pathname;
    const isTabHome =
      isHomePage === '/home' && windowWidth < 1280 && windowWidth >= 768;
    return (
      <>
        {isModalAddTransactionOpen && <ModalAddTransaction />}
        <div className={styles.container}>
          <header className={styles.header}>
            <Header />
          </header>
          <main
            className={styles.main}
            style={{
              backgroundImage: isTabHome
                ? 'url(/static/media/bgImg.c675a8b9.png)'
                : 'none',
              paddingBottom: isTabHome ? '320px' : '0px',
            }}
          >
            <aside className={styles.aside}>
              <nav className={styles.nav}>
                <Navigation {...this.props} />
              </nav>
              <section className={styles.balance}>
                <Balance />
              </section>
              {isTabHome && (
                <section className={styles.currency}>
                  <Currency />
                </section>
              )}
              {windowWidth >= 1280 && (
                <section className={styles.currency}>
                  <Currency />
                </section>
              )}
            </aside>
            <article className={styles.content}>
              <Switch>
                <Route path="/home">
                  <HomeTab />
                  <button
                    type="button"
                    className={styles.addTransaction}
                    onClick={() => {
                      openModalAddTransactionAction();
                    }}
                  >
                    +
                  </button>
                </Route>
                <Route path="/diagram" component={DiagramTab} />
                {windowWidth < 768 && (
                  <Route path="/currency" component={Currency} />
                )}
                <Redirect to="/home" />
              </Switch>
            </article>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isModalAddTransactionOpen: getIsModalAddTransactionOpen(state),
  userId: getUserId(state),
});

const mapDispatchToProps = {
  openModalAddTransactionAction: openModalAddTransaction,
  getFinanceDataFetch,
  // : userId => dispatch(getFinanceDataFetch(userId))
  // getFinanceTotalBalanceFetch: userId =>
  // dispatch(getFinanceTotalBalanceFetch(userId)),
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
