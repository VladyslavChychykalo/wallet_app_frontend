import React from 'react';
import Select from 'react-select';
import styles from './Table.module.css';

const mounth = [
  { label: 'January', value: 'January' },
  { label: 'February', value: 'February' },
  { label: 'March', value: 'March' },
  { label: 'April', value: 'April' },
  { label: 'May', value: 'May' },
  { label: 'June', value: 'June' },
  { label: 'July', value: 'July' },
  { label: 'August', value: 'August' },
  { label: 'September', value: 'September' },
  { label: 'October', value: 'October' },
  { label: 'November', value: 'November' },
  { label: 'December', value: 'December' },
];

const year = [
  { label: 2021, value: 2021 },
  { label: 2020, value: 2020 },
  { label: 2019, value: 2019 },
  { label: 2018, value: 2018 },
  { label: 2017, value: 2017 },
];

const Stateless = ({ data, handleChange, expenses, income }) => {
  const windowWidth = document.documentElement.clientWidth;

  return (
    <div className={styles.stateless}>
      <div className={styles.statelessSelect}>
        <div className={styles.statelessSelectGroup}>
          <Select
            onChange={handleChange}
            options={mounth}
            defaultValue={{ label: 'Month', value: 'Month' }}
          />
        </div>
        <div className={styles.statelessSelectGroup}>
          <Select
            onChange={handleChange}
            options={year}
            defaultValue={{ label: 'Year', value: 'Year' }}
          />
        </div>
      </div>
      <div className={styles.statelessHeader}>
        <p>Category</p>
        <p>Amount</p>
      </div>
      <div>
        {windowWidth < 768 && (
          <ul>
            {data.map(d => (
              <li key={d.id} className={styles.statelessListItem}>
                <div>
                  <span
                    className={styles.statelessIcone}
                    style={{ backgroundColor: `${d.color}` }}
                  />
                  <span className={styles.statelessTitle}>{d.category}</span>
                </div>
                <span className={styles.statelessAmount}>{d.amount}</span>
              </li>
            ))}
          </ul>
        )}
        {windowWidth >= 768 && windowWidth < 1280 && (
          <ul className={styles.statelessListTablet}>
            {data.map(d => (
              <li key={d.id} className={styles.statelessListItem}>
                <div>
                  <span
                    className={styles.statelessIcone}
                    style={{ backgroundColor: `${d.color}` }}
                  />
                  <span className={styles.statelessTitle}>{d.category}</span>
                </div>
                <span className={styles.statelessAmount}>{d.amount}</span>
              </li>
            ))}
          </ul>
        )}
        {windowWidth > 1280 && (
          <ul>
            {data.map(d => (
              <li key={d.id} className={styles.statelessListItem}>
                <div>
                  <span
                    className={styles.statelessIcone}
                    style={{ backgroundColor: `${d.color}` }}
                  />
                  <span className={styles.statelessTitle}>{d.category}</span>
                </div>
                <span className={styles.statelessAmount}>{d.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.statelessFooter}>
        <p>
          Expenses: <span style={{ color: '#3a5374' }}>{expenses}</span>
        </p>
        <p>
          Incoming: <span style={{ color: '#ff6c00' }}>{income}</span>
        </p>
      </div>
    </div>
  );
};

export default Stateless;
