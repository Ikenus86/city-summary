import React, { useState } from 'react';

function AnswersManager({ question, onUpdate }) {
  // Ensure question and question.answers are defined before accessing them
  const initialAnswers = question && question.answers ? question.answers : [];
  const [answers, setAnswers] = useState(initialAnswers);

  if (!question) {
    return <div>No question data.</div>;
  }
  
  const handleAddAnswer = () => {
    setAnswers([...answers, '']);
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    onUpdate(updatedAnswers);
  };

  const handleRemoveAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
    onUpdate(updatedAnswers);
  };

  return question && question.answers &&(
    <div className="AnswersManager">
      {answers.map((answer, index) => (
        <div key={index} className="AnswerRow">
         <input
            type="text"
            value={answer}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveAnswer(index)}>Remove</button>
        </div>
      ))}
      <button className="AddAnswerButton" onClick={handleAddAnswer}>Add Answer</button>
    </div>
  );
}

export default AnswersManager;