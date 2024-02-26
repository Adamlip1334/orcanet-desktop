import React from 'react';
import './FileSize.css'; // Adjust the import path as needed

const FileSize = ({ file }) => {
  return (
    <div className="file-size text_wrap_none">
      {prettyBytes(file.FileSize, 1)}
    </div>
  );
};

export default FileSize;


function prettyBytes(num, precision = 1) {
  if (Math.abs(num) < 1024) {
    return num + ' B';
  }
  const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let u = -1;
  const r = 10**precision;

  do {
    num /= 1024;
    ++u;
  } while (Math.round(Math.abs(num) * r) / r >= 1024 && u < units.length - 1);

  return num.toFixed(precision) + ' ' + units[u];
}
