import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('Should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const currentState = {
    text: 'something',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'news',
  };
  const state = filterReducer(currentState, action);
  expect(state.text).toBe('news');
});

test('Should set start date filter', () => {
  const currentState = {
    text: 'something',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const action = {
    type: 'SET_START_DATE',
    startDate: moment().startOf('month').add(3, 'months'),
  };
  const state = filterReducer(currentState, action);
  expect(state.startDate).toEqual(moment().startOf('month').add(3, 'months'));
});

test('Should set end date filter', () => {
  const currentState = {
    text: 'something',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const action = {
    type: 'SET_END_DATE',
    endDate: moment().endOf('month').add(3, 'months'),
  };
  const state = filterReducer(currentState, action);
  expect(state.endDate).toEqual(moment().endOf('month').add(3, 'months'));
});
