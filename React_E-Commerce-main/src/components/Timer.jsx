import React, { useState, useEffect } from 'react';

const Timer = () => {
  const initialSeconds = parseInt(localStorage.getItem('timerValue'), 10) || 24 * 60 * 60;
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        const updatedSeconds = prevSeconds - 1;
        localStorage.setItem('timerValue', updatedSeconds.toString());
        return updatedSeconds;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    return () => {
      localStorage.removeItem('timerValue');
    };
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </div>
  );
};

export default Timer;
