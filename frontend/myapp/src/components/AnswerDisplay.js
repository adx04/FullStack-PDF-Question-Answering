// AnswerDisplay.js
import React from 'react';
import './AnswerDisplay.css';

const AnswerDisplay = ({ answer }) => { 
  return (
    <div className="answer-display">
      <p>{answer ? answer : 'Your answer will appear here...'}</p>
    </div>
  );
};

export default AnswerDisplay;
