import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import QuestionBlock from '../components/QuestionBlock';
import './Create.css';

const Create = () => {
  const [survey, setSurvey] = useState({ title: '', description: '', questions: [] });
  const [newQuestion, setNewQuestion] = useState({ text: '', answers: [''] });

  const handleSave = () => {
    const savedSurveys = JSON.parse(localStorage.getItem('surveys')) || [];
    savedSurveys.push({ ...survey, createdAt: new Date().toISOString(), responses: 0 });
    localStorage.setItem('surveys', JSON.stringify(savedSurveys));
    alert('Sondaggio salvato!');
    setSurvey({ title: '', description: '', questions: [] });
  };

  const handleAddQuestion = () => {
    setSurvey({ ...survey, questions: [...survey.questions, newQuestion] });
    setNewQuestion({ text: '', answers: [''] });
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = survey.questions.filter((_, i) => i !== index);
    setSurvey({ ...survey, questions: updatedQuestions });
  };

  return (
    <div className="create-page">
      <h2>Crea Sondaggio</h2>
      <div className="create-container">
        <div className="sidebar">
          <div className="input-group">
            <input
              placeholder="Titolo"
              value={survey.title}
              onChange={(e) => setSurvey({ ...survey, title: e.target.value })}
            />
            <textarea
              placeholder="Descrizione"
              value={survey.description}
              onChange={(e) => setSurvey({ ...survey, description: e.target.value })}
            />
          </div>
          <button onClick={handleSave}>Salva</button>
          <div className="question-form">
            <input
              placeholder="Domanda"
              value={newQuestion.text}
              onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
            />
            <button onClick={handleAddQuestion}>Aggiungi</button>
          </div>
        </div>
        <div className="workspace">
          <DragDropContext onDragEnd={(result) => console.log(result)}>
            <Droppable droppableId="questions">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {survey.questions.map((question, index) => (
                    <Draggable key={index} draggableId={`question-${index}`} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <QuestionBlock
                            question={question}
                            onDelete={() => handleDeleteQuestion(index)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Create;