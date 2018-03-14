import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('Should setup set start date action generator', () => {
  const momentObject = moment();
  const action = setStartDate(momentObject);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: momentObject,
  });
});

test('Should setup set end date action generator', () => {
  const momentObject = moment();
  const action = setEndDate(momentObject);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: momentObject,
  });
});

test('Should setup sort by date action generator', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('Should setup sort by amount action generator', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('Should setup set text field action generator with argument', () => {
  const action = setTextFilter('kerala');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'kerala',
  });
});

test('Should setup set text field action generator without argument', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});
