import React, { Component } from 'react';
import moment from 'moment';
import Table from '../Table/Table';
import Chart from '../Chart/Chart';
import styles from './DiagramTab.module.css';
// import { fetchFinance } from '../../services/api';

const pickColor = state => state.data.datasets[0].backgroundColor;

const finance = {
  data: [
    {
      type: 'cost',
      date: 1577283638229,
      id: 'lkadj',
      amount: 420,
      category: 'Other',
      comment: 'ololo',
      balanceAfter: 288,
      typeBalanceAfter: '+',
      createdAt: '2020-10-25T14:19:58.147Z',
    },
    {
      type: 'cost',
      date: 1577283638229,
      id: 'lkadj',
      amount: 420,
      category: 'Food',
      comment: 'ololo',
      balanceAfter: 288,
      typeBalanceAfter: '+',
      createdAt: '2020-10-25T14:19:58.147Z',
    },
    {
      type: 'cost',
      date: 1577283638229,
      id: 'lkadjdew',
      amount: 420,
      category: 'Food',
      comment: 'ololo',
      balanceAfter: 288,
      typeBalanceAfter: '+',
      createdAt: '2020-10-25T14:19:58.147Z',
    },
    {
      type: 'cost',
      date: 1577283638229,
      id: 'lkadjdew',
      amount: 420,
      category: 'Food',
      comment: 'ololo',
      balanceAfter: 288,
      typeBalanceAfter: '+',
      createdAt: '2020-08-25T14:19:58.147Z',
    },
    {
      type: 'income',
      date: 1577283638229,
      id: 'lkadj',
      amount: 420,
      category: 'Food',
      comment: 'ololo',
      balanceAfter: 288,
      typeBalanceAfter: '+',
      createdAt: '2020-10-25T14:19:58.147Z',
    },
    {
      type: 'cost',
      date: 1330192800000,
      id: 'lkadj',
      amount: 420,
      category: 'Car',
      comment: 'ololo',
      balanceAfter: 288,
      typeBalanceAfter: '+',
      createdAt: '2020-10-20T14:19:58.147Z',
    },
    {
      type: 'cost',
      date: 1519211809934,
      id: 'lkadj',
      amount: 420,
      category: 'Car',
      comment: 'ololo',
      balanceAfter: 288,
      typeBalanceAfter: '+',
      createdAt: '2020-10-20T14:19:58.147Z',
    },
    {
      type: 'cost',
      date: 1519211810362,
      id: 'lkadj',
      amount: 420,
      category: 'Car',
      comment: 'ololo',
      balanceAfter: 288,
      typeBalanceAfter: '+',
      createdAt: '2020-10-20T14:19:58.147Z',
    },
  ],
};

const colors = [
  '#ecb22a',
  '#e28b20',
  '#d25925',
  '#67b7d0',
  '#5593d7',
  '#3e6ba8',
  '#9cc254',
  '#73ad57',
  '#507c3a',
];

class DiagramTab extends Component {
  state = {
    expenses: [],
    statistics: [],
    year: '',
    month: '',
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: colors,
          color: ['#ffffff'],
        },
      ],
    },
  };

  componentDidMount = () => {
    // fetchFinance()
    // const { finance } = this.props
    // filter finance by cost inside connect

    const allExpenses = this.filterExpenses(finance.data);
    this.setState({ expenses: allExpenses });

    const totalCosts = this.getTotalCost(allExpenses);

    this.formStatistics(totalCosts);

    this.filterStatistics();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { expenses, year, month } = this.state;

    if (month !== prevState.month || year !== prevState.year) {
      this.sortExpenses(expenses, month, year);
    }
  };

  sortExpenses(expenses, month, year) {
    const sorted = expenses.filter(exp => {
      const date = moment(exp.date).format('YYYY MMMM');
      const byMonth = month ? date.includes(month) : true;
      const byYear = year ? date.includes(year) : true;
      return byMonth && byYear;
    });

    const totalCosts = this.getTotalCost(sorted);

    this.formStatistics(totalCosts);

    this.filterStatistics();
  }

  filterStatistics = () => {
    const { statistics } = this.state;

    const categories = statistics.map(el => el.category);
    const costs = statistics.map(el => el.amount);

    const stateCopy = { ...this.state };

    stateCopy.data.datasets[0].data = costs;

    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        labels: categories,
        datasets: stateCopy.data.datasets,
      },
    }));
  };

  filterExpenses = expenses => expenses.filter(exp => exp.type === 'cost');

  getTotalCost = expenses =>
    expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});

  formStatistics = costs => {
    let counter = 0;
    const arr = [];
    Object.keys(costs).forEach(key => {
      arr.push({
        id: counter,
        category: key,
        amount: costs[key],
        color: pickColor(this.state)[counter],
      });
      counter += 1;
    });

    this.setState({ statistics: arr });
  };

  handleChange = ({ label }) => {
    // const {expenses} =  this.props
    if (typeof label === 'string') {
      this.setState({ month: label, statistics: [] });
    } else {
      this.setState({ year: label, statistics: [] });
    }
  };

  getAllExpenses = expenses =>
    expenses.reduce((acc, exp) => acc + exp.amount, 0);

  getAllIncome = income => income.reduce((acc, inc) => acc + inc.amount, 0);

  render() {
    const {
      diagram,
      chartBlock,
      chartBlockHeader,
      diagramHeader,
      wrapper,
    } = styles;

    const { data, statistics } = this.state;

    return (
      <div className={diagram}>
        <div className={diagramHeader}>
          <h2>Statistics</h2>
        </div>
        <div className={wrapper}>
          <div className={chartBlock}>
            <div className={chartBlockHeader}>
              <h2>Statistics</h2>
            </div>
            <div className="chart">
              <Chart data={data} />
            </div>
          </div>
          <div className="table">
            <Table
              data={statistics}
              handleChange={this.handleChange}
              expenses={this.getAllExpenses(statistics)}
              income={this.getAllIncome(finance.data)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DiagramTab;
