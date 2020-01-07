import React, { Component } from 'react';
import styles from './DashboardPage.module.css';
// import HomeTab from '../../components/HomeTab/HomeTab';
// import DiagramTab from '../../components/DiagramTab/DiagramTab';
// import Header from '../../components/Header/Header';
// import Currency from '../../components/Currency/Currency'
// import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction'

export default class DashboardPage extends Component {
  componentDidMount() {
    // clg
  }

  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>{/*
    <Header />> */}</header>
        <main className={styles.main}>
          <aside className={styles.aside}>
            <nav className={styles.nav} />
            <section className={styles.balance} />
            {window.screen.width > 769 && (
              <section className={styles.currency}>
                {/*
        <Currency /> */}
              </section>
            )}
          </aside>
          <article className={styles.content}>
            {/*
      <Route path="/home" component={HomeTab} /> */}
            {/*
      <Route path="/diagram" component={DiagramTab} /> */}
          </article>
        </main>
        <div className={styles.addTransaction}>
          {/*
    <ModalAddTransaction /> */}
        </div>
      </div>
    );
  }
}
