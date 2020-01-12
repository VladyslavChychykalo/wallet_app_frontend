import React from 'react';
import Select from 'react-select';
import styles from './Table.module.css';
import data from './data.json';

const mounth = [
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
  { label: 7, value: 7 },
  { label: 8, value: 8 },
  { label: 9, value: 9 },
  { label: 10, value: 10 },
  { label: 11, value: 11 },
  { label: 12, value: 12 },
];

const year = [
  { label: 2021, value: 2021 },
  { label: 2020, value: 2020 },
  { label: 2019, value: 2019 },
  { label: 2018, value: 2018 },
  { label: 2017, value: 2017 },
];

const Stateless = () => {
  const windowWidth = document.documentElement.clientWidth;

  return (
    <div className={styles.stateless}>
      <div className={styles.statelessSelect}>
        <div className={styles.statelessSelectGroup}>
          <Select
            options={mounth}
            defaultValue={{ label: 'Month', value: 'Month' }}
          />
        </div>
        <div className={styles.statelessSelectGroup}>
          <Select
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
                  <span className={styles.statelessTitle}>{d.title}</span>
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
                  <span className={styles.statelessTitle}>{d.title}</span>
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
                  <span className={styles.statelessTitle}>{d.title}</span>
                </div>
                <span className={styles.statelessAmount}>{d.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.statelessFooter}>
        <p>
          Expenses: <span style={{ color: '#3a5374' }}>2000.22</span>
        </p>
        <p>
          Incoming: <span style={{ color: '#ff6c00' }}>4000.33</span>
        </p>
      </div>
    </div>
  );
};

export default Stateless;
