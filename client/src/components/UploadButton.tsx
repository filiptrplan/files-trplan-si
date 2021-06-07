import * as React from 'react'

interface UploadButtonProps {
  files: File[]
}

export class UploadButton extends React.PureComponent<UploadButtonProps> {
  render() {
    return (
      <button id="uploadButton" className="btn is-primary">Upload</button>
    );
}}