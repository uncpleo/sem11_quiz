import React from 'react';
import "../styles/main.css"

const Question = ({ question, currentQuestion, handleAnswer }) => {
return (
    <div className='questionDiv'>
    <h2>{question.question}</h2>
    {question.options.map((option, index) => (
        <div key={index}>
        <label>
            <input
            type="radio"
            name={`question-${currentQuestion}`}
            value={option}
            onChange={(e) => handleAnswer(e.target.value)}
            />
            {option}
        </label>
        </div>
    ))}
    </div>
);
};

export default Question;
