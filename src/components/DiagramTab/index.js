import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import Chart from '../Chart/Chart';
import styles from './DiagramTab.module.css';

const pickColor = state => state.data.datasets[0].backgroundColor;

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
  static propTypes = {
    finance: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  };

  state = {
    expenses: [],
    income: [],
    statistics: [],
    year: 0,
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
    const { finance } = this.props;

    const allExpenses = this.filterTransactions(finance.data, 'expense');
    const allIncome = this.filterTransactions(finance.data, 'income');

    this.setState({ expenses: allExpenses, income: allIncome });

    const totalCosts = this.getTotal(allExpenses);

    this.formStatistics(totalCosts);
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { year, month, statistics } = this.state;
    const { finance } = this.props;

    if (prevState.statistics !== statistics) {
      this.filterStatistics();
    }

    if (month !== prevState.month || year !== prevState.year) {
      this.sortTransactions(finance.data, month, year);
    }
  };

  filterTransactions = (transaction, type) =>
    transaction.filter(trans => trans.type === type);

  getTotal = expenses =>
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
        datasets: [...stateCopy.data.datasets],
      },
    }));
  };

  sortTransactions(transactions, month, year) {
    const sorted = transactions.filter(trans => {
      const date = moment(Date.parse(trans.transactionDate)).format(
        'YYYY MMMM',
      );
      const byMonth = month ? date.includes(month) : true;
      const byYear = year ? date.includes(year) : true;
      return byMonth && byYear;
    });

    const allExpenses = this.filterTransactions(sorted, 'expense');
    const allIncome = this.filterTransactions(sorted, 'income');

    this.setState({ expenses: allExpenses, income: allIncome });

    const totalCosts = this.getTotal(allExpenses);

    return this.formStatistics(totalCosts);
  }

  handleChange = ({ value }) => {
    if (typeof value === 'string') {
      this.setState({ month: value, statistics: [] });
    } else {
      this.setState({ year: value, statistics: [] });
    }
  };

  getSum = transaction =>
    transaction.reduce((acc, trans) => acc + trans.amount, 0);

  render() {
    const {
      diagram,
      chartBlock,
      chartBlockHeader,
      diagramHeader,
      wrapper,
    } = styles;

    const { data, statistics, income } = this.state;

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

            {statistics.length > 0 ? (
              <Chart data={data} />
            ) : (
              'No transactions during this period'
            )}
          </div>

          <Table
            data={statistics}
            handleChange={this.handleChange}
            expenses={this.getSum(statistics)}
            income={this.getSum(income)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  finance: state.finance,
});

export default connect(mapStateToProps)(DiagramTab);
