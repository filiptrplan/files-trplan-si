import React, { useState } from 'react'
import { UploadBox } from './components/UploadBox';
import { UploadButton } from './components/UploadButton';


interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  let [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onSelectedFilesChange = (files: File[]) => {
    if (files == null) return;
    setSelectedFiles(files);
  }

  return (
    <div className="container upload-container">
      <UploadBox
        selectedFiles={selectedFiles}
        onFilesChange={onSelectedFilesChange}
      ></UploadBox>
      <UploadButton
        files={selectedFiles}
      ></UploadButton>
    </div>
  );
}