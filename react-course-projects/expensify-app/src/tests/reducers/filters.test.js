import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('test filters reducer default state', () => {
  const result = filterReducers(undefined, '@@INIT');
  expect(result).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sort by amount', () => {
  const result = filterReducers(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(result.sortBy).toBe('amount');
});

test('should set sort by date', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };

  const result = filterReducers(defaultState, { type: 'SORT_BY_DATE' });
  expect(result.sortBy).toBe('date');
});

test('should set text', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'felipe',
  };
  const result = filterReducers(undefined, action);
  expect(result.text).toBe(action.text);
});

test('should set start date', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment().add(20, 'days'),
  };
  const result = filterReducers(undefined, action);
  expect(result.startDate).toEqual(action.startDate);
});

test('should set end date', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment().add(20, 'days'),
  };
  const result = filterReducers(undefined, action);
  expect(result.endDate).toEqual(action.endDate);
});
