import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import uuid from 'uuid';
import css from './currency.module.css';
import { fetchCurrency } from '../../services/api';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetchCurrency()
      .then(privatRes => setCurrency(privatRes.slice(0, 3)))
      .catch(error => setError(!!error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {isLoading && (
        <Loader
          className={css.loader}
          type="TailSpin"
          color="#ff6c00"
          height={80}
          width={80}
        />
      )}
      {isError && (
        <div className={css.error}>Error please reload the page!</div>
      )}
      {!!currency.length && (
        <div className={css.currencyTable}>
          <div className={css.currencyHeadline}>
            <div className={css.headline}>Currency</div>
            <div className={css.headline}>Sale</div>
            <div className={css.headline}>Purshase</div>
          </div>
          {currency.map(item => (
            <div className={css.currencyBoard} key={uuid()}>
              <div className={css.mainLine}>{item.ccy}</div>
              <div className={css.mainLine}>{Number(item.sale).toFixed(2)}</div>
              <div className={css.mainLine}>{Number(item.buy).toFixed(2)}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Currency;
