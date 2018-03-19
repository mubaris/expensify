import moment from 'moment';
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should setup default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2], expenses[3], expenses[4]]);
});

test('Should not remove expense by if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'f',
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add a new ID', () => {
  const newItem = {
    id: '43',
    description: 'Movie',
    note: 'Black Panther',
    amount: 15000,
    createdAt: 0,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newItem,
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, newItem]);
});

test('Should edit expense by ID', () => {
  const description = 'Black Tea';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[4].id,
    updates: {
      description,
    },
  };
  const state = expenseReducer(expenses, action);
  expect(state[4].description).toBe(description);
});

test('Should not edit if ID doesn\'t exist', () => {
  const description = 'Black Tea';
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'f',
    updates: {
      description,
    },
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
