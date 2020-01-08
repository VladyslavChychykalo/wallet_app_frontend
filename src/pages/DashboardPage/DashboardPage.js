import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './DashboardPage.module.css';
// import HomeTab from '../../components/HomeTab/HomeTab';
import DiagramTab from '../../components/DiagramTab/index';
// import Header from '../../components/Header/Header';
import Currency from '../../components/Currency/Currency';
// import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction'

export default class DashboardPage extends Component {
  componentDidMount() {
    // clg
  }

  render() {
    const windowWidth = document.documentElement.clientWidth;
    return (
      <div className={styles.container}>
        <header className={styles.header}>{/*
    <Header />> */}Header</header>
        <main className={styles.main}>
          <aside className={styles.aside}>
            <nav className={styles.nav}>Navigation </nav>
            <section className={styles.balance}>Balance</section>
            {windowWidth >= 768 && (
              <section className={styles.currency}>
                <Currency />
              </section>
            )}
          </aside>
          <article className={styles.content}>
            <Switch>
              {/*
      <Route path="/home" component={HomeTab} /> */}

              <Route path="/diagram" component={DiagramTab} />
            </Switch>
          </article>
        </main>
        <div className={styles.addTransaction}>
          +{/*
    <ModalAddTransaction /> */}
        </div>
      </div>
    );
  }
}
