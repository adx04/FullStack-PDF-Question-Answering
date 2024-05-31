import React, { useState } from 'react';
import axios from 'axios';
import './QuestionForm.css';

const QuestionForm = ({ extractedText }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/ask', { question, context: extractedText })
      .then(response => {
        setAnswer(response.data.answer);
      })
      .catch(error => {
        console.error("There was an error asking the question!", error);
      });
  };

  return (
    <div>
      <form className="question-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ask a question..." onChange={e => setQuestion(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{answer}</p>
    </div>
  );
};

export default QuestionForm;
