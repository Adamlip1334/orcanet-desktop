import React from "react";
import Icon from "../Icon/Icon";
import logo from '../../assets/images/orca.jpg';
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
         <img src={logo} alt="OrcaNet Logo" className="sidebar_logo" />
      <div className="sidebar-icons">
        <NavLink
          to={`/transfers`}
          id="transfers"
          key="transfers"
          activeClassName="active"
        >
          <div className="sidebar-icon-box">
            <Icon iconName="TransfersIcon" className="sidebar-icon" />
          </div>
        </NavLink>
        <div className="sidebar-icon-box">
          <Icon iconName="LockIcon" className="sidebar-icon" />
        </div>
        <div className="sidebar-icon-box sidebar-settings">
        <Icon iconName="SettingsIcon" className="sidebar-icon" />
      </div>
      </div>
    
    </div>
  );
};

export default Sidebar;
