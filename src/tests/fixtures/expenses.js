import moment from 'moment';

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

export default expenses;
