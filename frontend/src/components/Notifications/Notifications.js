import React, { useState, useEffect,useRef } from 'react';
import moment from 'moment';
import './Notifications.css';

const Notifications = ({ isOpen, toggleOpen }) => {
    console.log(toggleOpen);
    // const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        { title: 'New Message', text: 'You have received a new message.', timestamp: Date.now() / 1000 - 600 },
        { title: 'Welcome', text: 'Thank you for joining our platform.', timestamp: Date.now() / 1000 - 3600 },
    ]);

    const notificationsRef = useRef(null);

    const closeNotifications = () => toggleOpen(false);
    const openNotifications = () => toggleOpen(true);
    const clearNotifications = () => {
        setNotifications([]);
        toggleOpen(false); // Optionally close the notifications panel on clear
    };

    // Custom click-away handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                closeNotifications();
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleOpen]);

    return (
        <div ref={notificationsRef} className={`notifications ${isOpen ? 'notifications_visible' : ''}`}>
            <div className="notifications__wrapper">
                <div className="notifications__header">
                    <div className="notifications__header-title">Notifications</div>
                    <div className="notifications__header-clear" onClick={clearNotifications}>
                        Clear all
                    </div>
                </div>
                <div className="notifications__body">
                    {notifications.length === 0 ? (
                        <div className="notifications__item-text">You have no notifications</div>
                    ) : (
                        notifications.map((item, index) => (
                            <div key={index} className="notifications__item">
                                <div className="notifications__item-header">
                                    <div className="notifications__item-title">{item.title}</div>
                                    <div className="notifications__item-time">
                                        {moment.unix(item.timestamp).fromNow()}
                                    </div>
                                </div>
                                <div className="notifications__item-text">{item.text}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
export default Notifications;
