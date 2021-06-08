import React from 'react'
import { FileListItem } from './FileListItem';

interface SelectedFileListProps {
  selectedFiles: File[]
  onDelete: (file: File) => void
}

export const SelectedFileList: React.FC<SelectedFileListProps> = ({ selectedFiles, onDelete }) => {

  let fileElements = Array<JSX.Element>();
  selectedFiles.forEach((file) => {
    fileElements.push(<FileListItem
      file={file}
      onDelete={(file) => onDelete(file)}
    ></FileListItem>)
  });
  if (fileElements.length === 0) {
    fileElements.push(
      <p>No files selected.</p>
    );
  }
  return (
    <ul className="selected-files-list">
      {fileElements}
    </ul>
  );
}