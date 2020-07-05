import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@init' });
  expect(state).toEqual([]);
});

test('shoul remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('shoul remove expense not existing id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'dummy id',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('shoul add expense', () => {
  const newExpense = {
    id: '4',
    description: 'Felipe',
    note: '',
    amount: 12424,
    createdAt: 24,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('shoul edit expense', () => {
  const updates = {
    description: 'Felipe',
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(updates.description);
});

test('shoul not edit non existing id edit expense', () => {
  const updates = {
    description: 'Felipe',
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'dummy id',
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
