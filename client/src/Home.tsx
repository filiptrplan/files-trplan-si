import React from 'react'
import { UploadBox } from './components/UploadBox';
import UploadButton from './components/UploadButton';

interface HomeState {
  selectedFiles: File[]
}

export class Home extends React.Component<{}> {
  state: HomeState = {
    selectedFiles: Array<File>()
  };

  constructor(props: {}) {
    super(props);
    this.onSelectedFilesChange = this.onSelectedFilesChange.bind(this);
  }

  onSelectedFilesChange(files: File[]) {
    if(files == null) return;
    this.setState({
      selectedFiles: files
    });
  }

  render() {
    return (
      <div className="container upload-container">
        <UploadBox
          selectedFiles={this.state.selectedFiles}
          onFilesChange={this.onSelectedFilesChange}
        ></UploadBox>
        <UploadButton
          files={this.state.selectedFiles}
        ></UploadButton>
      </div>
    );
  }
}