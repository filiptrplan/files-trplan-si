import React from 'react';

interface FileListItemProps {
  file: File,
  onDelete: (file: File) => void
}

export const FileListItem: React.FC<FileListItemProps> = (props) => {
  return (
    <li key={props.file.name}>
      <p>{props.file.name}</p>
      <button onClick={() => props.onDelete(props.file)} className="btn is-danger delete-button">X</button>
    </li>
  )
}
