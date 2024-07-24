import React, { useEffect, useState } from 'react';
import "../styles/main.css"

const Timer = ({ endExam }) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutos en segundos
  const [startTime, setStartTime] = useState(new Date().toLocaleTimeString());
  const [endTime, setEndTime] = useState(()=>{
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    return now.toLocaleTimeString();
  });

  


  useEffect(() => {
    const now = new Date();

    const timer = setInterval(() => {
      if (timeLeft === 0) {
        endExam();
        clearInterval(timer);
        return;
      }
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, endExam]);

  useEffect(() => {
    if (timeLeft === 0) {
      const now = new Date();
      setEndTime((now+1800).toLocaleTimeString());
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='contTemp'>
      <p>Hora de inicio: {startTime}</p>
      <p>Hora de finalización: {endTime}</p>
      <p>Tiempo Restante: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default Timer;

