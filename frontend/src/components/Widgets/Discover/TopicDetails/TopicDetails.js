import React, { useState, useEffect, useCallback, useContext } from 'react';
import Icon from './Icon'; // Adjust import paths as needed
import Dropdown from './Dropdown';
import Input from './Input';
import ShieldIcon from './ShieldIcon'; // Assuming you have an SVG React component

// Assuming you have context or Redux setup for topics and files
import { TopicsContext } from '../contexts/TopicsContext'; // Placeholder context import
import { FilesContext } from '../contexts/FilesContext'; // Placeholder context import

// Mock debounce function, replace or import from a utility library
function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const TopicDetails = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Contexts or Redux state
  const { topicDetails, officialTopicName } = useContext(TopicsContext);
  const { remoteFilesConfig, setRemoteFilesConfig } = useContext(FilesContext);

  // Simulated function to fetch topic details
  const getTopicDetails = useCallback((topicName) => {
    console.log('Fetching topic details for:', topicName);
    // Placeholder for actual fetch logic
  }, []);

  // Debounced search implementation
  const initRemoteSearch = useCallback(() => {
    const debouncedSearch = debounce(() => {
      let newConfig = { ...remoteFilesConfig, skip: 0, search: searchQuery };
      setRemoteFilesConfig(newConfig);
      console.log('Fetching files with new config:', newConfig);
      // Placeholder for actual fetch logic
    }, 500);
    debouncedSearch();
  }, [searchQuery, remoteFilesConfig, setRemoteFilesConfig]);

  useEffect(() => {
    if (remoteFilesConfig.topicName) {
      getTopicDetails(remoteFilesConfig.topicName);
    }
  }, [remoteFilesConfig.topicName, getTopicDetails]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const unsubscribe = () => {
    console.log('Unsubscribing...');
    setDropdownOpen(false);
  };

  const resubscribe = (topic) => {
    console.log('Resubscribing to topic:', topic);
    setDropdownOpen(false);
  };

  if (!remoteFilesConfig.topicName.length || !topicDetails) return null;

  return (
    <div className="topic-details">
      <div className="topic-details__top">
        <div className="topic-details__title selectable">
          {topicDetails.Name === officialTopicName && <ShieldIcon className="topic-details__title-icon" />}
          #{topicDetails.Name}
        </div>
        <div className="topic-details__stats">
          {/* Subscribers */}
          <div className="topic-details__stats-item">
            <Icon className="sidebar__stats-icon" icon="UsersIcon" active={false} />
            <span>{topicDetails.Subscribers}</span>
          </div>
          {/* File count */}
          <div className="topic-details__stats-item">
            <Icon className="sidebar__stats-icon" icon="FileIcon" active={false} />
            <span>{topicDetails.FileCount}</span>
          </div>
          {/* Lock icon if cannot write */}
          { !topicDetails.Permissions.CanWrite &&
            <div className="topic-details__stats-item">
              <Icon className="sidebar__stats-icon" icon="LockIcon" active={false} />
            </div>
          }
          {/* Actions dropdown */}
          {topicDetails.Name !== officialTopicName &&
            <div className="topic-details__stats-more">
              <div className="topic-details__stats-more-btn" onClick={toggleDropdown}>
                <Icon className="topic-details__stats-more-icon" icon="MoreIcon" />
              </div>
              {dropdownOpen && (
                <Dropdown className="topic-details__dropdown" open={dropdownOpen}>
                  <ul className="dropdown__list">
                    <li className="dropdown__list-item" onClick={() => resubscribe(topicDetails.Name)}>
                      Resubscribe
                    </li>
                    <li className="dropdown__list-item" onClick={unsubscribe}>
                      Unsubscribe
                    </li>
                  </ul>
                </Dropdown>
              )}
            </div>
          }
        </div>
      </div>
      <div className="topic-details__bot">
        <Input
          className="topic-details__search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon="SearchIcon"
          placeholder="Filter files..."
        />
      </div>
    </div>
  );
};

export default TopicDetails;
