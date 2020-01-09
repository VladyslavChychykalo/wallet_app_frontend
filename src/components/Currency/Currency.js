import React from 'react';
import css from './currency.module.css';

const Currency = () => {
  return (
    <div className={css.currencyTable}>
      <div className={css.currencyHeadline}>
        <div className={css.headline}>Currency</div>
        <div className={css.headline}>Sale</div>
        <div className={css.headline}>Purshase</div>
      </div>
      <div className={css.currencyBoard}>
        <div className={css.mainLine}>USD</div>
        <div className={css.mainLine}>27</div>
        <div className={css.mainLine}>27</div>
      </div>
    </div>
  );
};

export default Currency;
