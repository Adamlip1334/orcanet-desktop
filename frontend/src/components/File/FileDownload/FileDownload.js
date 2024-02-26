import React from 'react';
import './FileDownload.scss'; 
import Icon from '../../Icon/Icon'; 

const FileDownload = ({ hash }) => {
  const download = (hash) => {
    // Assuming window.go.surge.MiddlewareFunctions.DownloadFile is accessible
    // Replace with your actual download logic
    window.go.surge.MiddlewareFunctions.DownloadFile(hash).then(() => {
      // Dispatch actions or handle state update
      console.log('File downloaded', hash);
      // You might need to use Context or Redux for state management similar to Vuex
    });
  };

  return (
    <Icon
      icon="DownloadDefaultIcon"
      className="file-download"
      onClick={() => download(hash)}
    />
  );
};

export default FileDownload;
