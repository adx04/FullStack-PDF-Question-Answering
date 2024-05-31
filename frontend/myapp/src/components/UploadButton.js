import React, { useState } from 'react';
import axios from 'axios';
import './UploadButton.css';

const UploadButton = ({ onUpload }) => {
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    console.log('File chosen for upload:', file.name);

    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3001/upload', formData)
      .then(response => {
        console.log(response.data);
        setUploaded(true);
        onUpload(response.data.extractedText); // Call the onUpload prop function
      })
      .catch(error => {
        console.error("There was an error uploading the file!", error);
        setUploaded(false);
      });
  };

  return (
    <label className="upload-button">
      {uploaded ? 'PDF Uploaded' : 'Upload PDF'}
      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
        hidden
      />
    </label>
  );
};

export default UploadButton;
