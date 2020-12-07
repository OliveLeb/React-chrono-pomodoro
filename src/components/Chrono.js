import React, { useState, useEffect } from 'react';

const Chrono2 = () => {
  const [startTime, setStartTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });

  const toggleIsActive = () => {
    setIsActive(!isActive);
    setStartTime(Date.now() - startTime);
  };

  const reset = () => {
    setStartTime(0);
    setIsActive(false);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
  };

  useEffect(() => {

    document.title = "Stopwatch";

    let interval = null;
    if (isActive) { 
      interval = setInterval(() => {
        setTime({
          h: ('0' + Math.floor((Date.now() - startTime) / 1000 / 3600)).slice(-2),
          m: ('0' + Math.floor((Date.now() - startTime) / 1000 / 60 % 60)).slice(-2),
          s: ('0' + Math.floor((Date.now() - startTime) / 1000 % 60)).slice(-2),
          ms: ('0' + Math.floor((Date.now() - startTime) / 10 % 100)).slice(-2),
        });
      }, 100);
    } else if (!isActive && startTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime, time]);

  return (
    <div style={{ minHeight: 'calc(100vh - (24px + 64px))' }}>
      <div className='pt-5 text-center'>
        <h1>Chrono</h1>
      </div>

      <div className='h1 my-5 d-flex justify-content-center'>
        {time.h !== '00' && time.h !== 0 && <div style={{width:'50px',height:'60px',textAlign:'center'}}>{time.h} :</div>}
        {time.m !== '00' && time.m !== 0 && <div style={{width:'50px',height:'60px',textAlign:'center'}}>{time.m} :</div>}
        <div style={{width:'50px',height:'60px',textAlign:'center'}}>{time.s}</div>:
        <div style={{width:'50px',height:'60px',textAlign:'center'}}>{time.ms}</div>
        
        
      </div>
      <div className='d-flex justify-content-around'>
        <button onClick={toggleIsActive} className='btn btn-primary'>
          {isActive
            ? 'Pause'
            : !isActive && startTime !== 0
            ? 'Resume'
            : 'Start'}
        </button>

        {startTime !== 0 ? (
          <button onClick={reset} className='btn btn-secondary'>
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Chrono2;
