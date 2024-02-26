import React from 'react';
import {NavLink} from 'react-router-dom'
import Icon from '../Icon/Icon'; // Adjust the import path according to your project structure
import './Navigation.css'; // Assuming SCSS is set up in your project
import logo from '../../assets/images/orca.jpg';
const Navigation = () => {
  // Define the navigation items
  const items = [
    {
      text: "Transfers",
      route: "transfers",
      icon: "TransfersIcon",
    },
    {
      text: "Channels",
      route: "discover",
      icon: "DiscoverIcon",
    },
  ];

  return (
    <nav className="navigation">
      <NavLink to="/" exact className="navigation__logo" activeClassName="active">
        <img src={logo} alt="OrcaNet Logo" />
      </NavLink>
      {items.map((item) => (
        <NavLink to={`/${item.route}`} id={item.route} key={item.route} className="navigation__item" activeClassName="active">
          <Icon className="navigation__icon" iconName={item.icon} />
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
