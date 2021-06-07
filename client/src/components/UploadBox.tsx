import * as React from 'react'
import Dropzone from 'react-dropzone';

interface UploadBoxProps {
  selectedFiles: File[],
  onFilesChange: (files: File[]) => void
};

export class UploadBox extends React.PureComponent<UploadBoxProps> {
  onDrop(acceptedFiles: File[]) {
    this.props.onFilesChange(acceptedFiles);
  }

  onDeleteClick(file: File) {
    let newFiles = [...this.props.selectedFiles];
    newFiles = newFiles.filter((value) => {
      return value !== file;
    })
    this.props.onFilesChange(newFiles);
  }

  render() {
    let fileElements = Array<JSX.Element>();
    this.props.selectedFiles.forEach((file) => {
      fileElements.push(<li key={file.name}>
        <p>{file.name}</p>
        <button onClick={() => this.onDeleteClick(file)} className="btn is-danger delete-button">X</button>
      </li>)
    });

    return (
      <div className="upload-box-container">
        <Dropzone onDrop={acceptedFiles => this.onDrop(acceptedFiles)} multiple={true} >
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
    );
  }
}