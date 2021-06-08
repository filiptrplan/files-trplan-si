import React from 'react';

interface FileListItemProps {
  file: File,
  onDelete: (file: File) => void
}

export default function FileListItem(props: FileListItemProps) {
  return (
    <li key={props.file.name}>
      <p>{props.file.name}</p>
      <button onClick={() => props.onDelete(props.file)} className="btn is-danger delete-button">X</button>
    </li>
  )
}
