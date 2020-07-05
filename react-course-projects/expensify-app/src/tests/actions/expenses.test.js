import { act } from 'react-dom/test-utils';
import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('test removeExpense generated objetct', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123',
  });
});

test('test editExpense generated object', () => {
  const action = editExpense('123', { note: 'halo halo' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: { note: 'halo halo' },
  });
});

test('test addExpense provided values', () => {
  const expense = {
    description: 'Felipe Curte carne',
    note: 'carne e top de mais',
    amount: 500,
    createdAt: 3812093,
  };

  const action = addExpense(expense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expense,
    },
  });
});

test('test addExpense default values', () => {
  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...defaultExpense,
    },
  });
});
