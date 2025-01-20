import React, { useEffect, useState } from 'react';
import SurveyCard from '../components/SurveyCard';
import './Surveys.css';

const Surveys = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const savedSurveys = JSON.parse(localStorage.getItem('surveys')) || [];
    setSurveys(savedSurveys);
  }, []);

  return (
    <div className="surveys-page">
      <h2>Sondaggi</h2>
      <div className="survey-list">
        {surveys.map((survey, index) => (
          <SurveyCard key={index} survey={survey} />
        ))}
      </div>
    </div>
  );
};

export default Surveys;