import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render ExpenseForm correctly with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[3]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render error for invalid form submit', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should change description on input change', () => {
  const value = 'Description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should set note on textarea change', () => {
  const value = 'Note Value';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('Should set amount on valid input', () => {
  const value = '44.55';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('Should not set amount on invalid input', () => {
  const value = '44.555';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('amount')).toBe('');
});

test('Should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
  });
  expect(wrapper.state('errorMessage')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    amount: expenses[1].amount,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt,
  });
});

test('Should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
