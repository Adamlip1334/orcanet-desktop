import React from 'react';
import './FileName.css'; // Adjust path as necessary
// Import icons as React components
import { ReactComponent as DownloadIcon } from '@/assets/icons/DownloadIcon.svg';
import { ReactComponent as UploadIcon } from '@/assets/icons/UploadIcon.svg';
import { ReactComponent as CheckIcon } from '@/assets/icons/CheckIcon.svg';
import { ReactComponent as MissingIcon } from '@/assets/icons/MissingIcon.svg';

// Optional: Import a tooltip library if you used tooltips in Vue
// import Tooltip from 'react-tooltip';

const FileName = ({ file, nameOnly = false }) => {
  // Function to determine which icon to display
  const Icon = () => {
    if (file.IsMissing) return <MissingIcon className="file-name__icon" />;
    else if (file.IsDownloading) return <DownloadIcon className="file-name__icon" />;
    else if (file.IsUploading) return <UploadIcon className="file-name__icon" />;
    else return <CheckIcon className="file-name__icon" />;
  };

  return (
    <div className="file-name selectable">
      {!nameOnly && <Icon />}
      <div className="file-name__title text_wrap_none selectable" title={file.FileName}>
        {file.FileName}
      </div>
    </div>
  );
};

export default FileName;
