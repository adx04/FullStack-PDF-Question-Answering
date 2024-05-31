import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
  const formData = new FormData();
  formData.append('file', file);
  
  axios.post('http://localhost:3001/upload', formData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("There was an error uploading the file!", error);
    });
};

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </div>
  );
};

export default Upload;
