import moment from 'moment';
import {
  setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate,
} from '../../actions/filters';

test('test setStartDate', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('test setEndDate', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('test sortByAmount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('test sortByDate', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('test setTextFilter', () => {
  const action = setTextFilter('felipe');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'felipe',
  });
});

test('test setTextFilter', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});
