import React, { useState, useEffect } from 'react';

const Chrono2 = () => {
  const [startTime, setStartTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const tiempo = startTime;

  const toggleIsActive = () => {
    setIsActive(!isActive);
    setStartTime(Date.now() - tiempo);
  };

  const reset = () => {
    setStartTime(0);
    setIsActive(false);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime({
          h: ('0' + Math.floor((Date.now() - tiempo) / 1000 / 3600)).slice(-2),
          m: ('0' + Math.floor((Date.now() - tiempo) / 1000 / 60)).slice(-2),
          s: ('0' + Math.floor((Date.now() - tiempo) / 1000)).slice(-2),
          ms: ('0' + Math.floor((Date.now() - tiempo) / 10)).slice(-2),
        });
      }, 100);
    } else if (!isActive && startTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime, time, tiempo]);

  return (
    <>
      <div>Le Chrono</div>

      <p></p>
      <p>
        {time.h} : {time.m} : {time.s} : {time.ms}
      </p>
      <button onClick={toggleIsActive}>
        {isActive ? 'Pause' : !isActive && startTime !== 0 ? 'Resume' : 'Start'}
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Chrono2;
