import React from 'react';

const Summary = ({ correctAnswers, incorrectAnswers, totalQuestions }) => {
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  return (
    <div>
      <h2>Resumen del examen</h2>
      <p>Respuestas Correctas: {correctAnswers}</p>
      <p>Respuestas Incorrectas: {incorrectAnswers}</p>
      <p>Porcentaje: {percentage}%</p>
    </div>
  );
};

export default Summary;
