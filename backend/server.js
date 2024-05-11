
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.array('files', 2), (req, res) => {
  res.send('Files uploaded successfully');
});

app.listen(port, () => {
  console.log('Server listening at http://localhost:' + port);
});
