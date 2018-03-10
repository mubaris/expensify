import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import convertToEmoji from './emoji';

const ExpenseDashboardPage = () => (
  <div>
        Hello There
  </div>
);

const AddExpensePage = () => (
  <div>
        Hello from Add Expense Page
  </div>
);

const EditExpensePage = () => (
  <div>
        Hello from Edit Expense Page
  </div>
);

const HelpPage = () => (
  <div>
        Hello from Help Page
  </div>
);

const NotFoundPage = () => (
  <div>
        404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => {
  const emojifiedTitle = convertToEmoji('Expensify 💰');
  const helpText = convertToEmoji('Help 💁');
  return (
    <header>
      <h1 dangerouslySetInnerHTML={{ __html: emojifiedTitle }} />
      <NavLink to="/" activeClassName="is-active" exact={true}>
            Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
            Create
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
            Edit
      </NavLink>
      <NavLink
        activeClassName="is-active"
        to="/help"
        dangerouslySetInnerHTML={{ __html: helpText }}
       />
    </header>
  );
};

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
