import React from 'react'

interface UploadButtonProps {
  files: File[]
}

export const UploadButton: React.FC<UploadButtonProps> = (props) => {
  return (
    <button id="uploadButton" className="btn is-primary">Upload</button>
  );
}
