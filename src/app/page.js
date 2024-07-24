'use client'
import React, { useState } from 'react';
import Question from '../components/Preguntas.jsx';
import Timer from '../components/Temporizador.jsx';
import Summary from '../components/Resumen.jsx';

const questions = [
  {
    "id": 1,
    "question": "Resolver la ecuación \(2e^{2x} - 3e^x + 1 = 0\):",
    "options": ["x = \\ln(1)", "x = \\ln(2)", "x = \\ln(\\frac{3}{2})", "x = \\ln(\\frac{1}{2})"],
    "answer": "x = \\ln(1)"
  },
  {
    "id": 2,
    "question": "Resolver la ecuación cuadrática \(x^2 - 5x + 6 = 0\):",
    "options": ["x = 2, x = 3", "x = -2, x = -3", "x = 1, x = 6", "x = -1, x = -6"],
    "answer": "x = 2, x = 3"
  },
  {
    "id": 3,
    "question": "Encuentra los valores de \(x\) para los cuales \(\sin(x) = 0.5\):",
    "options": ["x = \\frac{\\pi}{6} + 2n\\pi", "x = \\frac{\\pi}{3} + 2n\\pi", "x = \\frac{\\pi}{4} + 2n\\pi", "x = \\frac{\\pi}{2} + 2n\\pi"],
    "answer": "x = \\frac{\\pi}{6} + 2n\\pi"
  },
  {
    "id": 4,
    "question": "Resolver la ecuación diferencial \(\frac{dy}{dx} = y\):",
    "options": ["y = Ce^x", "y = Cx", "y = Cx^2", "y = C\\ln(x)"],
    "answer": "y = Ce^x"
  },
  {
    "id": 5,
    "question": "Resolver el sistema de ecuaciones: \(x + y = 5\) y \(2x - y = 3\):",
    "options": ["x = 2, y = 3", "x = 3, y = 2", "x = 1, y = 4", "x = 4, y = 1"],
    "answer": "x = 2, y = 3"
  },
  {
    "id": 6,
    "question": "Encuentra el valor de \(x\) en la ecuación \(\\log(x) = 2\):",
    "options": ["x = 10", "x = 20", "x = 100", "x = 1000"],
    "answer": "x = 100"
  },
  {
    "id": 7,
    "question": "Resolver la ecuación \(\int 2x dx\):",
    "options": ["x^2 + C", "2x^2 + C", "x^3 + C", "2x + C"],
    "answer": "x^2 + C"
  },
  {
    "id": 8,
    "question": "Encuentra la solución general de la ecuación diferencial \(\frac{d^2y}{dx^2} + y = 0\):",
    "options": ["y = A\\cos(x) + B\\sin(x)", "y = Ae^x + Be^{-x}", "y = Ax + B", "y = A\\sin(x) + B\\cos(x)"],
    "answer": "y = A\\cos(x) + B\\sin(x)"
  },
  {
    "id": 9,
    "question": "Resolver la ecuación \(\frac{d}{dx}(xy) = y + x\frac{dy}{dx}\):",
    "options": ["xy = x + C", "xy = C", "xy = y + x", "xy = C - x"],
    "answer": "xy = C"
  },
  {
    "id": 10,
    "question": "Encuentra el valor de \(x\) para el cual \(\\frac{x^2 - 4}{x - 2} = 0\):",
    "options": ["x = 2", "x = -2", "x = 4", "x = -4"],
    "answer": "x = 2"
  },
  {
    "id": 11,
    "question": "Resolver la ecuación \(\\tan(x) = 1\):",
    "options": ["x = \\frac{\\pi}{4} + n\\pi", "x = \\frac{\\pi}{2} + n\\pi", "x = \\frac{3\\pi}{4} + n\\pi", "x = n\\pi"],
    "answer": "x = \\frac{\\pi}{4} + n\\pi"
  },
  {
    "id": 12,
    "question": "Encuentra la solución de \(\\cos(2x) = 0\):",
    "options": ["x = \\frac{\\pi}{4} + n\\frac{\\pi}{2}", "x = \\frac{\\pi}{2} + n\\frac{\\pi}{2}", "x = \\frac{3\\pi}{4} + n\\frac{\\pi}{2}", "x = \\frac{\\pi}{2} + n\\pi"],
    "answer": "x = \\frac{\\pi}{4} + n\\frac{\\pi}{2}"
  },
  {
    "id": 13,
    "question": "Resolver la ecuación exponencial \(3^x = 81\):",
    "options": ["x = 3", "x = 4", "x = 5", "x = 6"],
    "answer": "x = 4"
  },
  {
    "id": 14,
    "question": "Encuentra la solución de \(e^x + e^{-x} = 2\):",
    "options": ["x = 0", "x = 1", "x = -1", "x = 2"],
    "answer": "x = 0"
  },
  {
    "id": 15,
    "question": "Resolver la ecuación \(\frac{d}{dx}(e^x y) = e^x\):",
    "options": ["y = 1 + Ce^{-x}", "y = e^x + C", "y = x + C", "y = Ce^x"],
    "answer": "y = 1 + Ce^{-x}"
  },
  {
    "id": 16,
    "question": "Encuentra la solución general de la ecuación diferencial \(\frac{d^2y}{dx^2} - y = 0\):",
    "options": ["y = A\\cosh(x) + B\\sinh(x)", "y = Ae^x + Be^{-x}", "y = Ax + B", "y = A\\sin(x) + B\\cos(x)"],
    "answer": "y = A\\cosh(x) + B\\sinh(x)"
  },
  {
    "id": 17,
    "question": "Resolver la ecuación \(\int e^{2x} dx\):",
    "options": ["\\frac{1}{2}e^{2x} + C", "e^{2x} + C", "2e^{2x} + C", "e^x + C"],
    "answer": "\\frac{1}{2}e^{2x} + C"
  },
  {
    "id": 18,
    "question": "Encuentra el valor de \(x\) para el cual \(\\frac{d}{dx}(x^3 - 3x^2 + 2x) = 0\):",
    "options": ["x = 1, x = 2", "x = -1, x = 2", "x = 0, x = 1", "x = -1, x = 0"],
    "answer": "x = 1, x = 2"
  },
  {
    "id": 19,
    "question": "Resolver la ecuación \(\\ln(x) = 3\):",
    "options": ["x = e^3", "x = 3", "x = e", "x = 1"],
    "answer": "x = e^3"
  },
  {
    "id": 20,
    "question": "Encuentra el valor de \(x\) en la ecuación \(\\sqrt{x + 1} = 3\):",
    "options": ["x = 8", "x = 9", "x = 7", "x = 6"],
    "answer": "x = 8"
  }
];
const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    setAnswers({ ...answers, [currentQuestion]: selectedAnswer });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSummary(true);
    }
  };

  const endExam = () => {
    setShowSummary(true);
  };

  const calculateSummary = () => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });

    return { correctAnswers, incorrectAnswers };
  };

  const { correctAnswers, incorrectAnswers } = calculateSummary();

  return (
    <div>
      <h1>Examen Online</h1>
      {!showSummary ? (
        <div>
          <div className='preguntaTimer'>
          <Timer endExam={endExam} />
          <Question 
            question={questions[currentQuestion]} 
            currentQuestion={currentQuestion} 
            handleAnswer={handleAnswer} 
          />
          </div>
          <p>Pregunta {currentQuestion + 1} de {questions.length}</p>
          <button className='btn' onClick={handleNextQuestion}>Next</button>
        </div>
        
      ) : (
        <Summary 
          correctAnswers={correctAnswers} 
          incorrectAnswers={incorrectAnswers} 
          totalQuestions={questions.length} 
        />
      )}
    </div>
  );
};

export default Home;