import React, { useState, useRef } from 'react';
import './App.scss';

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [title, setTitle] = useState('Lets the countdown Begin!!');
  const intervalRef = useRef(null);

  function startTimer() {
    console.log(intervalRef.current)
    if (intervalRef.current !== null){
      return;
    }
    setTitle(`You're doing great`);
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) {
          return timeLeft - 1;
        }
        else return 0;
      });
    }, 1000);

  }


  function resetTimer() {
    clearInterval(intervalRef.current);
    setTitle('Are you ready for another round?');
    setTimeLeft(25 * 60);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Keep it up');
  }


  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const second = (timeLeft - minutes * 60).toString().padStart(2, '0');



  return (
    <div className="App">
      <h2>{title}</h2>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{second}</span>
      </div>
      <div className="buttons">
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
