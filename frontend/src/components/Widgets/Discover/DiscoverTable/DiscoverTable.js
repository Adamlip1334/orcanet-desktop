import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Assuming Redux for global state
import FileName from './FileName'; // Adjust these imports according to your project structure
import FileSize from './FileSize';
import FileHash from './FileHash';
import FileDownload from './FileDownload';
import Icon from '../assets/images/Icon';

// Icons
import DownloadIcon from '../assets/icons/DownloadIcon';
import UploadIcon from '../assets/icons/UploadIcon';
import CheckIcon from '../assets/icons/CheckIcon';

const DiscoverTable = () => {
  // Assuming use of Redux for state management
  const { remoteFiles } = useSelector(state => state.files);
  const dispatch = useDispatch();

  useEffect(() => {
    // Replace 'files/fetchRemoteFiles' with your actual action
    dispatch({ type: 'files/fetchRemoteFiles' });
  }, [dispatch]);

  const openTipModal = (file) => {
    // Assuming setActiveFile and openTipModal are actions or methods provided via context or Redux
    dispatch({ type: 'files/setActiveFile', payload: file });
    // Replace with your method to open the modal, might use context or direct method call
  };

  const getFileIcon = (file) => {
    if (file.IsDownloading) {
      return <DownloadIcon />;
    } else if (file.IsUploading) {
      return <UploadIcon />;
    } else {
      return <CheckIcon />;
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th className="text_align_left">name</th>
          <th className="text_align_right">size</th>
          <th className="text_align_left">file hash</th>
          <th className="text_align_right">seeds</th>
          <th className="text_align_right"></th>
        </tr>
      </thead>
      <tbody>
        {remoteFiles.map((file) => (
          <tr key={file.FileHash}>
            <td className="text_wrap_none" style={{ maxWidth: '300px' }}>
              <FileName file={file} />
            </td>
            <td className="text_align_right">
              <FileSize file={file} />
            </td>
            <td className="text_wrap_none" style={{ maxWidth: '230px' }}>
              <FileHash hash={file.FileHash} />
            </td>
            <td className="text_align_right">{file.NumSeeders}</td>
            <td className="text_align_right">
              <div className="discover-table__actions">
                <Icon icon="TipIcon" onClick={() => openTipModal(file)} />
                {!file.IsTracked && <FileDownload hash={file.FileHash} />}
                {file.IsTracked && getFileIcon(file)}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DiscoverTable;
