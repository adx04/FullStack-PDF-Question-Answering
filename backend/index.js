const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const axios = require('axios'); // Make sure to import axios

const app = express();
app.use(cors());
app.use(express.json());


// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Store the extracted text from the PDF
let extractedText = '';

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/upload', upload.single('file'), (req, res, next) => {
  if (!req.file) {
    return next(new Error('No file uploaded'));
  }

  fs.readFile(req.file.path, (err, buffer) => {
    if (err) {
      console.error('There was an error reading the file!', err);
      return next(err);
    }

    pdfParse(buffer)
      .then(data => {
        // Store the extracted text
        extractedText = data.text;
        console.log(extractedText);
        res.json({ message: 'File uploaded and parsed successfully' });
      })
      .catch(err => {
        console.error('There was an error parsing the PDF file!', err);
        return next(err);
      });
  });
});

app.post('/ask', (req, res, next) => {
  const question = req.body.question;
  if (!question) {
    return next(new Error('No question provided'));
  }

  // Call the Hugging Face Inference API (or any other similar service)
  axios.post('https://api-inference.huggingface.co/models/bert-large-uncased-whole-word-masking-finetuned-squad', {
    context: extractedText,
    question: question
  })
  .then(response => {
    // The response from the API will contain the answer
    res.json({ answer: response.data.answer });
  })
  .catch(err => {
    console.error(err);
    return next(err);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(3001, () => console.log('Server running on port 3001'));
