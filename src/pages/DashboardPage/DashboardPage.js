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
    userId: PropTypes.string.isRequired,
    getFinanceDataFetch: PropTypes.string.isRequired,
    // pathname: PropTypes.string.isRequired,
    // location: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  componentDidMount() {
    const { getFinanceDataFetch, userId } = this.props;
    getFinanceDataFetch(userId);
  }

  render() {
    // const { location } = this.props;

    const {
      isModalAddTransactionOpen,
      openModalAddTransactionAction,
    } = this.props;
    const windowWidth = document.documentElement.clientWidth;
    // let pathname;
    // if (location && location.pathname) {
    // pathname = location.pathname;
    // }
    // const isHomePage = location.pathname;
    return (
      <>
        {isModalAddTransactionOpen && <ModalAddTransaction />}
        <div className={styles.container}>
          <header className={styles.header}>
            <Header />
          </header>
          <main className={styles.main}>
            <aside className={styles.aside}>
              <nav className={styles.nav}>
                <Navigation />
              </nav>
              <section className={styles.balance}>
                <Balance />
              </section>
              {/* {windowWidth < 1280 && windowWidth>= 768 &&
          isHomePage === '/home' && (
          <section className={styles.currency}>
            <Currency />
          </section>
          )} */}
              {windowWidth >= 1280 && (
                <section className={styles.currency}>
                  <Currency />
                </section>
              )}
            </aside>
            <article className={styles.content}>
              <Switch>
                <Route path="/home" component={HomeTab} />
                <Route path="/diagram" component={DiagramTab} />
                {windowWidth < 768 && (
                  <Route path="/currency" component={Currency} />
                )}
                <Redirect to="/home" />
              </Switch>
            </article>
          </main>
          <Route path="/home">
            <button
              type="button"
              className={styles.addTransaction}
              onClick={() => {
                openModalAddTransactionAction();
              }}
            >
              +{/* open
        <ModalAddTransaction /> */}
            </button>
          </Route>
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
