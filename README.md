# FullStack PDF Question Answering

## Table of Contents
1. Overview
2. Technologies Used
3. Features
4. Setup and Installation
5. Usage
6. Future Improvements
7. Contributing

## Overview
This project is a full-stack web application that allows users to upload PDF documents and ask questions based on the content of these documents. The application uses a Natural Language Processing (NLP) model to answer the questions.

## Technologies Used
- **Frontend**: The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces. It uses modern features of React such as hooks and functional components.
- **Backend**: The backend of the application is built using Node.js and Express.js. Node.js is a JavaScript runtime that allows you to run JavaScript on the server. Express.js is a web application framework for Node.js.
- **NLP**: The application uses the Hugging Face API for question answering. Hugging Face is a leading provider of pre-trained NLP models.
- **Real-time Communication**: The application uses Socket.IO for real-time communication between the client and the server.

## Features
- **File Upload**: Users can upload PDF documents which are then processed and stored. The application supports multiple file uploads and displays a progress bar during the upload process.
- **Question Answering**: Users can ask questions based on the content of the uploaded PDFs. The application uses the Hugging Face API to answer these questions. The answers are displayed in a user-friendly format.
- **Real-time Communication**: The application uses Socket.IO to provide real-time updates to the user. This includes updates on the file upload progress and the status of the question answering process.

## Setup and Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the server using `npm start`.
5. Navigate to `localhost:3000` in your browser to access the application.

## Usage
1. Click on the 'Upload' button to upload a PDF document.
2. Wait for the upload to complete. You can monitor the progress on the progress bar.
3. Once the upload is complete, you can ask questions based on the content of the PDF.
4. Enter your question in the 'Ask a question' field and click 'Submit'.
5. The answer to your question will be displayed below.

## Future Improvements
- Improve the accuracy of the NLP model by fine-tuning it on domain-specific data.
- Add support for other file types such as DOCX and TXT.
- Implement a user authentication system to allow users to save and manage their documents.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.


