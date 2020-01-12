/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import * as Datetime from 'react-datetime';
import './react-datetime.css';
import styles from './AddTransactionForm.module.css';
import backArrow from '../../../assets/icons/arrow right/long-arrow-left.svg';

const options = [
  { value: 'Food', label: 'Food' },
  { value: 'Car', label: 'Car' },
  { value: 'Self-care', label: 'Self-care' },
  { value: 'Children', label: 'Children' },
  { value: 'Home-care', label: 'Home-care' },
  { value: 'Education', label: 'Education' },
  { value: 'Hobbies', label: 'Hobbies' },
  { value: 'Other', label: 'Other' },
];

class AddTransactionForm extends Component {
  static propTypes = {
    closeModalAddTransaction: PropTypes.func.isRequired,
  };

  state = {
    typeOfTransaction: 'expense',
    // value: null,
    // comment: '',
    timeOfTransaction: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ).valueOf(),
    // category: null,
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  // };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleSelect = e => {
  //   this.setState({
  //     category: e.value,
  //   });
  // };

  handleDate = e => {
    this.setState({
      // eslint-disable-next-line no-underscore-dangle
      timeOfTransaction: e._d.valueOf(),
    });
  };

  render() {
    const { typeOfTransaction, timeOfTransaction } = this.state;
    const { closeModalAddTransaction } = this.props;
    const windowWidth = document.documentElement.clientWidth;
    return (
      <>
        <div className={styles.titleWrapper}>
          <div className={styles.controlWrapper}>
            {windowWidth < 768 && (
              <button
                type="button"
                className={styles.closeModalButton}
                onClick={closeModalAddTransaction}
              >
                <img alt="" src={backArrow} />
              </button>
            )}
            <h2 className={styles.title}>add transaction</h2>
          </div>
        </div>
        <form
          className={styles.transactionForm}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <div className={styles.typeOfTransactionWrapper}>
            <input
              type="radio"
              id="contactChoice1"
              name="typeOfTransaction"
              value="income"
              className={styles.typeRadio}
            />
            <label htmlFor="contactChoice1">Income</label>

            <input
              type="radio"
              id="contactChoice2"
              name="typeOfTransaction"
              value="expense"
              className={styles.typeRadio}
              defaultChecked
            />
            <label htmlFor="contactChoice2" defaultChecked>
              Expense
            </label>
          </div>
          {typeOfTransaction === 'expense' && (
            <Select
              placeholder="Category"
              options={options}
              onChange={this.handleSelect}
              className={styles.select}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: control => ({
                  ...control,
                  border: '2px solid #b9c9d4',
                }),
              }}
            />
          )}
          <div className={styles.dateAndValueWrapper}>
            <input
              type="text"
              name="value"
              placeholder="0.00"
              className={styles.valueInput}
              autoComplete="off"
            />
            <Datetime
              closeOnSelect
              value={timeOfTransaction}
              dateFormat="DD/MM/YYYY"
              timeFormat={false}
              onChange={this.handleDate}
            />
          </div>
          <label htmlFor="comment" className={styles.comment}>
            <p>Comment</p>
          </label>
          <textarea
            id="comment"
            name="comment"
            placeholder="You can input comment here"
            className={styles.inputComment}
          />
          <button type="submit" className={styles.transactionButton}>
            Add
          </button>
        </form>
      </>
    );
  }
}

export default AddTransactionForm;
