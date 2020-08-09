import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {routes} from 'Routes/constants';

export const TopBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to={routes.main} className="navbar-brand">
          Medium
        </Link>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink exact to={routes.main} className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.login} className="nav-link">
              Sign in
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.register} className="nav-link">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
