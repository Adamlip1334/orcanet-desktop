import React, { useState, useEffect } from 'react';
import './NetworkStats.css';

const NetworkStats = () => {
  const [totalClients, setTotalClients] = useState(2);
  const [avgDownloadSpeed, setAvgDownloadSpeed] = useState('1.2 MB/s');
  const [avgUploadSpeed, setAvgUploadSpeed] = useState('310 Bytes/s');

  useEffect(() => {
    // Example of setting these values - replace with actual data fetching logic
    // setTotalClients(fetchTotalClients());
    // setAvgDownloadSpeed(fetchAvgDownloadSpeed());
    // setAvgUploadSpeed(fetchAvgUploadSpeed());
  }, []);

  return (
    <div className="network-stats">
      <div className="network-stats__left">
        <span>Total clients connected: {totalClients}</span>
      </div>
      <div className="network-stats__right">
        <span>Avg Speed: {avgDownloadSpeed} | {avgUploadSpeed}</span>
      </div>
    </div>
  );
};

export default NetworkStats;
