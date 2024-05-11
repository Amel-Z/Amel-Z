
import React, { useState } from 'react';

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const uploadFiles = () => {
    const formData = new FormData();
    selectedFiles.forEach(file => formData.append('files', file));

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={uploadFiles}>Upload Files</button>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileUpload;
