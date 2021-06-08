import React from 'react'

interface UploadButtonProps {
  files: File[]
}

export default function UploadButton(props: UploadButtonProps) {
  return (
    <button id="uploadButton" className="btn is-primary">Upload</button>
  );
}
