import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
  const state = store.getState();
  const visible = getVisibleExpenses(state.expenses, state.filters);
  console.log(visible);
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
store.dispatch(sortByAmount());

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
