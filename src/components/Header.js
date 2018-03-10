import React from 'react';
import { NavLink } from 'react-router-dom';
import convertToEmoji from './../emoji';

const Header = () => {
  const emojifiedTitle = convertToEmoji('Expensify 💰');
  const helpText = convertToEmoji('Help 💁');
  return (
    <header>
      <h1 dangerouslySetInnerHTML={{ __html: emojifiedTitle }} />
      <NavLink to="/" activeClassName="is-active" exact>
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

export default Header;
