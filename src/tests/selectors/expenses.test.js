import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'Travel',
  note: 'Civil Lines',
  amount: 12500,
  createdAt: 0,
},
{
  id: '2',
  description: 'Coffee',
  note: 'Espresso',
  amount: 1500,
  createdAt: moment(0).subtract(10, 'days').valueOf(),
},
{
  id: '3',
  description: 'Food',
  note: 'Biriyani',
  amount: 5000,
  createdAt: moment(0).subtract(20, 'days').valueOf(),
},
{
  id: '4',
  description: 'Chips',
  note: 'Lays',
  amount: 1000,
  createdAt: moment(0).add(10, 'days').valueOf(),
},
{
  id: '5',
  description: 'Tea',
  note: 'Milked',
  amount: 500,
  createdAt: moment(0).add(15, 'days').valueOf(),
}];

test('Should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[4], expenses[0], expenses[1]]);
});

test('Should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[4], expenses[3], expenses[0]]);
});

test('Should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[4], expenses[3], expenses[0], expenses[1], expenses[2]]);
});

test('Should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2], expenses[1], expenses[3], expenses[4]]);
});
