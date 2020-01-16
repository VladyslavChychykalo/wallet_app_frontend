import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './DashboardPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import HomeTab from '../../components/HomeTab/HomeTab';
import DiagramTab from '../../components/DiagramTab/index';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransactionConteiner';

export default class DashboardPage extends Component {
  static propTypes = {
    isModalAddTransactionOpen: PropTypes.bool.isRequired,
    openModalAddTransaction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // clg
  }

  render() {
    const { isModalAddTransactionOpen, openModalAddTransaction } = this.props;
    const windowWidth = document.documentElement.clientWidth;
    return (
      <>
        {!!isModalAddTransactionOpen && <ModalAddTransaction />}
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
              {windowWidth >= 768 && (
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
                openModalAddTransaction();
              }}
            >
              +{/* open <ModalAddTransaction /> */}
            </button>
          </Route>
        </div>
      </>
    );
  }
}
