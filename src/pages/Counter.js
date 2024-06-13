import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0) {
      clearInterval(timer);
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, count]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Counter;
