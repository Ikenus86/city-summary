import React, { useEffect, useState } from 'react';
//import { Bar } from 'react-chartjs-2';
import './Results.css';

const Results = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const savedSurveys = JSON.parse(localStorage.getItem('surveys')) || [];
    setSurveys(savedSurveys);
  }, []);

  const data = {
    labels: surveys.map((survey) => survey.title),
    datasets: [
      {
        label: 'Risposte',
        data: surveys.map((survey) => survey.responses || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="results-page">
      <h2>Risultati</h2>
      <div className="chart-container">
      </div>
    </div>
  );
};

export default Results;