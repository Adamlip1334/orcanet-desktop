import React, { useState, useEffect } from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import Notifications from '../Notifications/Notifications';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import Icon from '../Icon/Icon';
import Logo from '../../assets/images/orca.jpg';

const Header = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
      setIsNotificationsOpen(!isNotificationsOpen);
  };

  // Placeholder functions for modal interactions, these don't do anything for now
  const openAddFileModal = () => {
    console.log("Add file modal placeholder action");
  };

  const openSettingsModal = () => {
    console.log("Settings modal placeholder action");
  };

  const openUserWalletModal = () => {
    console.log("User wallet modal placeholder action");
  };

  // Placeholder function for toggling notifications, these don't do anything for now
  // const toggleNotifications = () => {
  //   console.log("Toggle notifications placeholder action");
  // };

  return (
    <header className="header">
      <div className="header__left">    
        <Navigation />
      </div>
      <div className="header__right">
        <Button type="button" theme="primary" className="header__button" onClick={openAddFileModal}>
          Add file
        </Button>
        <Divider />
        <Icon
          className="header__icon"
          iconName="NotificationsIcon"
          onClick={toggleNotifications}
        />
        <Notifications isOpen={isNotificationsOpen} toggleOpen={setIsNotificationsOpen}/>
        <Icon
          onClick={openSettingsModal}
          className="header__icon"
          iconName="SettingsIcon"
        />
        <Icon
          onClick={openUserWalletModal}
          className="header__icon"
          iconName="WalletIcon"
        />
      </div>
    </header>
  );
};

export default Header;
