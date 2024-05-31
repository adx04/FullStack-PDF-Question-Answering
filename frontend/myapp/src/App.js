import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadButton from './components/UploadButton';
import QuestionForm from './components/QuestionForm';
import AnswerDisplay from './components/AnswerDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadButton />
      <QuestionForm />
      <AnswerDisplay />
      <Footer />
    </div>
  );
}

export default App;
