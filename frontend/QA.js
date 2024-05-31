import React, { useState } from 'react';
import axios from 'axios';
import AnswerDisplay from './AnswerDisplay';

const QA = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = () => {
    setLoading(true);
    axios.post('http://localhost:3001/ask', { question })
      .then(response => {
        setAnswer(response.data.answer);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error asking the question!", error);
        setAnswer("There was an error asking the question. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div>
      <input type="text" onChange={e => setQuestion(e.target.value)} />
      <button onClick={askQuestion} disabled={loading}>
        {loading ? "Loading..." : "Ask"}
      </button>
      <AnswerDisplay answer={answer} /> {/* Use AnswerDisplay to display the answer */}
    </div>
  );
  
};

export default QA;
