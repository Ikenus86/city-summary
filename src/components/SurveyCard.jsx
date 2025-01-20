import React from 'react';
import './SurveyCard.css';

const SurveyCard = ({ survey }) => {
  return (
    <div className="survey-card">
      <h3>{survey.title}</h3>
      <p>{survey.description}</p>
      <div className="details">
        <span>Creato il: {new Date(survey.createdAt).toLocaleDateString()}</span>
        <span>Risposte: {survey.responses || 0}</span>
      </div>
    </div>
  );
};

export default SurveyCard;