// Importing React and SVGs as React components
import React from 'react';
import { ReactComponent as TransfersIcon } from '../../assets/icons/TransfersIcon.svg';
import { ReactComponent as DiscoverIcon } from '../../assets/icons/DiscoverIcon.svg';
import { ReactComponent as NotificationsIcon } from '../../assets/icons/NotificationsIcon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/SettingsIcon.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/InfoIcon.svg';
import { ReactComponent as ChartIcon } from '../../assets/icons/ChartIcon.svg';
import { ReactComponent as CopyIcon } from '../../assets/icons/CopyIcon.svg';
import { ReactComponent as DownloadDefaultIcon } from '../../assets/icons/DownloadDefaultIcon.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/PlusIcon.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg';
import { ReactComponent as SelectIcon } from '../../assets/icons/SelectIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/icons/UsersIcon.svg';
import { ReactComponent as FileIcon } from '../../assets/icons/FileIcon.svg';
import { ReactComponent as LockIcon } from '../../assets/icons/LockIcon.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/MoreIcon.svg';
import { ReactComponent as FolderIcon } from '../../assets/icons/FolderIcon.svg';
import { ReactComponent as ControlCloseIcon } from '../../assets/icons/ControlCloseIcon.svg';
import { ReactComponent as ControlPlayIcon } from '../../assets/icons/ControlPlayIcon.svg';
import { ReactComponent as ControlPauseIcon } from '../../assets/icons/ControlPauseIcon.svg';
import { ReactComponent as WalletIcon } from '../../assets/icons/WalletIcon.svg';
import { ReactComponent as TipIcon } from '../../assets/icons/TipIcon.svg';
import { ReactComponent as DropdownIcon } from '../../assets/icons/DropdownIcon.svg';

// Mapping icon names to their React components
const ICONS = {
  TransfersIcon,
  DiscoverIcon,
  NotificationsIcon,
  SettingsIcon,
  InfoIcon,
  ChartIcon,
  CopyIcon,
  DownloadDefaultIcon,
  PlusIcon,
  CloseIcon,
  SelectIcon,
  UsersIcon,
  FileIcon,
  LockIcon,
  MoreIcon,
  FolderIcon,
  ControlCloseIcon,
  ControlPlayIcon,
  ControlPauseIcon,
  WalletIcon,
  TipIcon,
  DropdownIcon,
};

const Icon = ({ iconName, className, onClick }) => {
  const SelectedIcon = ICONS[iconName];

  if (!SelectedIcon) {
    console.error(`Icon "${iconName}" not found.`);
    return null; // Or return a default icon or a placeholder
  }

  const iconClassName = `icon ${className || ''}`.trim();

  // Make sure the onClick prop is passed to the SVG element
  return <SelectedIcon className={iconClassName} onClick={onClick} />;
};




export default Icon;
