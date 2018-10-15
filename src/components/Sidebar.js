import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import Logo from '../assets/img/pressexpresslogo.svg';

const Sidebar = ({ user }) => {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="Press Express Logo" />
      </div>
      <ul className="sidebar__list">
        <li className="sidebar__list-item sidebar__order-form-list-item">
          <Link
            to="/admin/orderform"
            className="sidebar__list-link sidebar__order-form-link">
            Order Form
          </Link>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/admin/active" className="sidebar__list-link">
            Active
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/admin/completed" className="sidebar__list-link">
            Completed
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/admin/special" className="sidebar__list-link">
            Special Orders
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/admin/cancelled" className="sidebar__list-link">
            Cancelled
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink to="/admin/exceptions" className="sidebar__list-link">
            Exceptions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
