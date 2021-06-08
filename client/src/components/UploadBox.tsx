import React from 'react'
import Dropzone from 'react-dropzone';
import {FileListItem} from './FileListItem';

interface UploadBoxProps {
  selectedFiles: File[],
  onFilesChange: (files: File[]) => void
};

export const UploadBox: React.FC<UploadBoxProps> = (props) => {
  const onDrop = (acceptedFiles: File[]) => {
    props.onFilesChange(acceptedFiles);
  }

  const onDelete = (file: File) => {
    let newFiles = [...props.selectedFiles];
    newFiles = newFiles.filter((value) => {
      return value !== file;
    })
    props.onFilesChange(newFiles);
  }

  let fileElements = Array<JSX.Element>();
  props.selectedFiles.forEach((file) => {
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
    <div>
      <div className="upload-box-container">
        <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)} multiple={true} >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div className="upload-box" {...getRootProps()}>
                <input {...getInputProps()} />
                <h6>Drag and drop files here</h6>
              </div>
            </section>
          )}
        </Dropzone>
        <p className="selected-files-label">Selected files:</p>
        <ul className="selected-files-list">
          {fileElements}
        </ul>
      </div>
    </div>
  )
}
