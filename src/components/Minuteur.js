import React, { useState, useEffect } from 'react';

const Minuteur = () => {
  const [time, setTime] = useState({ m: 0, s: 0 });
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    //let interval = null;
    if (isActive && time.s >= 0 && time.m >= 0) {
      //const interval =
      time.m >= 0 &&
        time.s >= 0 &&
        setTimeout(() => {
          setTime({
            ...time,
            s: '0' + time.s - 1,
          });
          if (time.s === 0) {
            setTime({ m: '0' + time.m - 1, s: 60 - 1 });
          }
        }, 1000);
      // return () => clearInterval(interval);
    }
  }, [isActive, time]);

  return (
    <>
      <div>
        <h1>Minuteur</h1>
      </div>
      <div className='row m-5 justify-content-center'>
        <div className='col-3 px-0'>
          <input
            type='number'
            required
            value={time.m}
            onChange={(e) => setTime({ ...time, m: e.target.value })}
            className='form-control'
          />
        </div>
        <div className='col-3 px-0'>
          <input
            type='number'
            required
            value={time.s}
            onChange={(e) => setTime({ ...time, s: e.target.value })}
            className='form-control'
          />
        </div>
      </div>
      <p className='text-center my-5 h2'>
        {time.m} : {time.s}
      </p>
      <div className='text-center'>
        <button onClick={toggleActive} className='btn btn-primary'>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    </>
  );
};

export default Minuteur;
