import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  onDateChange(createdAt) {
    if (createdAt) {
      this.setState(() => ({
        createdAt,
      }));
    }
  }

  onFocusChange({ focused }) {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please insert description and amount',
      }));
    } else {
      this.setState(() => ({
        error: '',
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  }

  render() {
    return (
      <div>
        {!!this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onChangeInput}
          />
          <input
            name="amount"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={(e) => {
              const { value } = e.target;
              if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) { this.onChangeInput(e); }
            }}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            name="note"
            placeholder="Add a not for your expense"
            value={this.state.note}
            onChange={this.onChangeInput}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
