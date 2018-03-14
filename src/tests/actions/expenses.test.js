import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action generator', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('Should setup edit expense action generator', () => {
  const updates = {
    amount: 300,
    description: 'Coffee',
  };
  const action = editExpense('someid', updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'someid',
    updates,
  });
});

test('Should setup add expense action generator with passed values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'Monthly Rent',
    amount: 10000,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('Should setup add expense action generator with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
