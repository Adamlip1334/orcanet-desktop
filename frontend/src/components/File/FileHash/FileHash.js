import React, { useState } from 'react';
import './FileHash.css'; // Adjust the import path as necessary
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Make sure to have an Icon component or replace with an appropriate icon
import { ReactComponent as CopyIcon } from '@/assets/icons/CopyIcon.svg'; // Adjust import path

const FileHash = ({ hash }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Adjust delay as needed
  };

  return (
    <div
      className={`file-hash selectable ${copied ? 'file-hash_active' : ''}`}
      data-label="Copied"
      // Tooltip would need a different implementation in React
    >
      <CopyToClipboard text={hash} onCopy={handleCopy}>
        <div>
          <CopyIcon className="file-hash__icon" />
          <div className="file-hash__text text_wrap_none">{hash}</div>
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default FileHash;
