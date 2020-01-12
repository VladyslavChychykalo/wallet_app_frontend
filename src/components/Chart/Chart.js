import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';
import styles from './styles.module.css';

const data = {
  labels: [
    'Main Expenses',
    'Food',
    'Car',
    'Self Care',
    'Child Care',
    'House',
    'Education',
    'Entertainment',
    'Other',
  ],
  datasets: [
    {
      data: [500, 50, 100, 200, 50, 30, 70, 80, 40],
      backgroundColor: [
        '#ecb22a',
        '#e28b20',
        '#d25925',
        '#67b7d0',
        '#5593d7',
        '#3e6ba8',
        '#9cc254',
        '#73ad57',
        '#507c3a',
      ],
      color: ['#ffffff'],
    },
  ],
};

export default class Chart extends Component {
  state = {};

  render() {
    return (
      <div className={styles.canvasContainer}>
        <Pie
          className={styles.pie}
          data={data}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            plugins: {
              labels: {
                render: 'label',
                fontColor: 'white',
              },
            },
          }}
        />
      </div>
    );
  }
}
