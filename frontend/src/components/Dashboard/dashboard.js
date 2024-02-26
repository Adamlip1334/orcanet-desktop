import React from 'react';
import './dashboard.css'; // Ensure you have the CSS file for styling
import NetworkStats from '../NetworkStats/NetworkStats';
const fileData = [
  {
    id: 1,
    name: 'The.Eric.Andre.Show...',
    downloadSpeed: '1 MB/s',
    uploadSpeed: '310 Bytes/s',
    status: 'Downloading: 6.94%',
    remaining: '6 minutes',
    seeds: '2'
  },
  {
    id: 2,
    name: 'Let It Be Sheet Music...',
    downloadSpeed: '0 Bytes/s',
    uploadSpeed: '0 Bytes/s',
    status: 'Seeding',
    remaining: 'Finished',
    seeds: '1'
  },
  {
    id: 3,
    name: 'Test.txt',
    downloadSpeed: '0 Bytes/s',
    uploadSpeed: '0 Bytes/s',
    status: 'Seeding',
    remaining: 'Finished',
    seeds: '1'
  },
  {
    id: 4,
    name: 'React App (1).webm',
    downloadSpeed: '0 Bytes/s',
    uploadSpeed: '0 Bytes/s',
    status: 'Seeding',
    remaining: 'Finished',
    seeds: '1'
  }
];

const FileTransfers = () => {
  return (
    <div className="file-transfers-container">
  
      <h1>File Transfers</h1>
      
      <div className="file-list">
        <div className="file-list-header">
          <span>File</span>
          <span>Down</span>
          <span>Up</span>
          <span>Status</span>
          <span>Remaining</span>
          <span>Seeds</span>
        </div>
        {fileData.map((file) => (
          <div key={file.id} className="file-list-item">
            <span>{file.name}</span>
            <span>{file.downloadSpeed}</span>
            <span>{file.uploadSpeed}</span>
            <span>{file.status}</span>
            <span>{file.remaining}</span>
            <span>{file.seeds}</span>
          </div>
        ))}
      </div>
      <NetworkStats />
      {/* <div className="file-transfers-footer">
        <span>Total clients connected: 2</span>
        <span>Avg Speed: 1.2 MB/s | 310 Bytes/s</span>
      </div> */}
    </div>
  );
};

export default FileTransfers;
