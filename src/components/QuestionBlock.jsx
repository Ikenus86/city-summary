import React from 'react';
import './QuestionBlock.css';

const QuestionBlock = ({ question, onDelete }) => {
  return (
    <div className="question-block">
      <h4>{question.text}</h4>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <button onClick={onDelete}>Elimina</button>
    </div>
  );
};

export default QuestionBlock;