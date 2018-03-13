import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

store.dispatch(addExpense({
  description: 'Coffee',
  amount: 1000,
  createdAt: -2000,
}));

store.dispatch(addExpense({
  description: 'Chips',
  amount: 2000,
  createdAt: -1000,
}));

store.dispatch(addExpense({
  description: 'Travel',
  amount: 500,
  createdAt: 125,
}));

store.dispatch(addExpense({
  description: 'Rent',
  amount: 10000,
  createdAt: 123,
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('root'));
