import React from 'react';
import './ContentWrapper.css'; // Assuming the SCSS is compiled to CSS

const ContentWrapper = ({ type, children }) => {
  // Apply dynamic class based on the `type` prop
  const wrapperClass = `content-wrapper content-wrapper_type_${type}`;

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
};

// Set default props in case they aren't passed to the component
ContentWrapper.defaultProps = {
  type: '',
};

export default ContentWrapper;
