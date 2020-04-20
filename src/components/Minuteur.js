import React, { useState, useEffect } from 'react';

const Minuteur = () => {
  const [time, setTime] = useState({ m: 0, s: 30 });
  const [isActive, setIsActive] = useState(false);
  const [repos, setRepos] = useState({ m: 0, s: 30 });
  const [laps, setLaps] = useState(2);
  const [sessionName, setSessionName] = useState('Travail');
  const [timeLeft, setTimeLeft] = useState({ m: 0, s: 30 });
  const [count, setCount] = useState(1);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setIsActive(false);
    setTimeLeft({ ...time });
    setSessionName('Travail');
  };
  const changeTimeS = (e) => {
    setTime({ ...time, s: e.target.value });
    setTimeLeft({ ...timeLeft, s: e.target.value });
  };
  const changeTimeM = (e) => {
    setTime({ ...time, m: e.target.value });
    setTimeLeft({ ...time, m: e.target.value });
  };

  useEffect(() => {
    let interval = null;
    console.log(count);
    const handleSwitch = () => {
      if (sessionName === 'Travail') {
        setSessionName('Repos');
        setTimeLeft({ ...repos });
      } else if (sessionName === 'Repos') {
        setSessionName('Travail');
        setTimeLeft({ ...time });
      }
    };

    const compteurTour = () => {
      setCount(count + 1);
    };
    const stop = () => {
      setIsActive(false);
      setCount(1);
    };
    if (count / 2 <= laps) {
      if (isActive && timeLeft.m >= 0 && timeLeft.s > 0) {
        interval =
          timeLeft.m >= 0 &&
          timeLeft.s >= 0 &&
          setInterval(() => {
            if (timeLeft.s > 0 && timeLeft.m >= 0) {
              setTimeLeft({
                ...timeLeft,
                s: timeLeft.s - 1,
              });
            } else if (timeLeft.s === 0 && timeLeft.m > 0) {
              setTimeLeft({ m: timeLeft.m - 1, s: 60 - 1 });
            }
          }, 1000);
      } else if (isActive && timeLeft.m === 0 && timeLeft.s === 0) {
        interval = setInterval(() => {
          if (timeLeft.s === 0 && timeLeft.m >= 0) {
            setTimeLeft({ m: timeLeft.m - 1, s: 60 - 1 });
          } else {
            setTimeLeft({
              ...timeLeft,
              s: timeLeft.s - 1,
            });
            console.log(count, 'pause');
          }
        }, 1000);
        handleSwitch();
        compteurTour();
      } else {
        clearInterval(interval);
      }
    } else {
      clearInterval(interval);
      stop();
    }
    return () => clearInterval(interval);
  }, [isActive, time, sessionName, repos, timeLeft, count, laps]);

  return (
    <>
      <div>
        <h1>Minuteur</h1>
      </div>
      <div className='text-center'>
        <h3>{sessionName}</h3>
      </div>

      <div className='text-center h2 my-5'>
        {timeLeft.m} : {timeLeft.s}
      </div>

      <div className='text-center'>
        <button onClick={toggleActive} className='btn btn-primary mx-2'>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className='btn btn-secondary mx-2' onClick={reset}>
          Reset
        </button>
      </div>

      <div className='row m-5 justify-content-center'>
        <div className='col-3 px-0'>
          <input
            type='number'
            required
            value={time.m}
            onChange={changeTimeM}
            className='form-control'
          />
        </div>
        <div className='col-3 px-0'>
          <input
            type='number'
            required
            value={time.s}
            onChange={changeTimeS}
            className='form-control'
          />
        </div>
      </div>

      <div>
        <div className='row m-5 justify-content-center'>
          <div className='col-3 px-0'>
            <input
              type='number'
              value={repos.m}
              onChange={(e) => setRepos({ ...repos, m: e.target.value })}
              className='form-control'
            />
          </div>
          <div className='col-3 px-0'>
            <input
              type='number'
              value={repos.s}
              onChange={(e) => setRepos({ ...repos, s: e.target.value })}
              className='form-control'
            />
          </div>
        </div>
        <div className='col text-center'>
          Nombre de tours :
          <input
            type='number'
            value={laps}
            onChange={(e) => setLaps(e.target.value)}
            className='form-control col-2 m-auto'
          />
        </div>
        <p></p>
        <p></p>
      </div>
    </>
  );
};

export default Minuteur;
