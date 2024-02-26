import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon'; // Adjust the import path according to your project structure
import './Button.css'; // Assuming SCSS is set up in your project

const Button = ({ theme, size, disabled, type, to, icon, active, children }) => {
  const className = `button button_theme_${theme} ${active ? `button_theme_${theme}_active` : ''} button_size_${size}`;

  // Conditionally render a button or a Link based on the 'type' prop
  const Component = type === 'link' ? Link : 'button';

  const commonProps = {
    className,
    ...(type === 'link' && { to }),
    ...(type === 'button' && { disabled }),
  };

  return (
    <Component {...commonProps}>
      {icon && <Icon icon={icon} className="button__icon" />}
      {children}
    </Component>
  );
};

Button.defaultProps = {
  theme: 'default',
  size: 'lg',
  disabled: false,
  type: 'button',
  to: '',
  icon: '',
  active: false,
};

export default Button;
