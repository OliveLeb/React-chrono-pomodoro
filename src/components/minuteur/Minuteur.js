import React, { useState, useEffect, useRef } from 'react';
import styles from './Minuteur.module.css';
import bipSound from '../../sound/End.wav';
import bipSound2 from '../../sound/Bleep.wav';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Minuteur = () => {
  const [time, setTime] = useState({ m: 0, s: 30 });
  const [isActive, setIsActive] = useState(false);
  const [repos, setRepos] = useState({ m: 0, s: 30 });
  const [laps, setLaps] = useState(2);
  const [sessionName, setSessionName] = useState('Travail');
  const [timeLeft, setTimeLeft] = useState({ m: 0, s: 30 });
  const [count, setCount] = useState(0);

  const [soundOn, setSoundOn] = useState(true);
  const bip = useRef();
  const bip2 = useRef();

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setIsActive(false);
    setTimeLeft({ ...time });
    setSessionName('Travail');
    setCount(0);
  };
  const changeTimeS = (e) => {
    setTime({ ...time, s: e.target.value });
    setTimeLeft({ ...timeLeft, s: e.target.value });
  };
  const changeTimeM = (e) => {
    setTime({ ...time, m: e.target.value });
    setTimeLeft({ ...time, m: e.target.value });
  };
  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  useEffect(() => {
    let interval = null;

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
      if (sessionName === 'Repos') setCount(count + 1);
    };
    const stop = () => {
      setIsActive(false);
      setCount(0);
    };

    if (count < laps) {
      //  if (count >= laps) return;
      if (isActive && timeLeft.m >= 0 && timeLeft.s > 0) {
        if (timeLeft.m === 0 && timeLeft.s === 4 && soundOn) bip.current.play();
        else if (timeLeft.m === 0 && timeLeft.s === 1 && soundOn)
          bip2.current.play();
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
    return () => {
      clearInterval(interval);
      stop();
    };
  }, [isActive, time, sessionName, repos, timeLeft, count, laps, soundOn]);

  return (
    <>
      <div className='d-flex justify-content-between mb-5 mx-3 mt-5 fullPage'>
        <h1>Minuteur</h1>
        <p> Utilisation hooks useState</p>
        <div onClick={toggleSound}>
          {soundOn ? (
            <FaVolumeUp className={styles.sound} />
          ) : (
            <FaVolumeMute className={styles.sound} />
          )}
        </div>
      </div>
      <div className='text-center'>
        <h3>{sessionName}</h3>
        {count + 1} / {laps}
      </div>

      <div
        className={
          timeLeft.s <= 5 && timeLeft.s === 0
            ? styles.currentTimeRed
            : styles.currentTime
        }
      >
        {timeLeft.m} : {timeLeft.s}
      </div>

      <div className='text-center my-5'>
        <button onClick={toggleActive} className='btn btn-primary mx-2'>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className='btn btn-secondary mx-2' onClick={reset}>
          Reset
        </button>
      </div>

      <div className='text-center m-5'>
        Temps de travail
        <div className='row justify-content-center align-items-center'>
          <div className='px-0'>
            <input
              type='number'
              required
              value={time.m}
              onChange={changeTimeM}
              className={styles.cadreTemps}
              min='0'
            />
          </div>
          <span className='mx-2'> : </span>
          <div className='px-0'>
            <input
              type='number'
              required
              value={time.s}
              onChange={changeTimeS}
              className={styles.cadreTemps}
              min='0'
            />
          </div>
        </div>
      </div>

      <div>
        <div className='text-center m-5'>
          Temps de repos
          <div className='row justify-content-center align-items-center'>
            <div className='px-0'>
              <input
                type='number'
                value={repos.m}
                onChange={(e) => setRepos({ ...repos, m: e.target.value })}
                className={styles.cadreTemps}
                min='0'
              />
            </div>
            <span className='mx-2'> : </span>
            <div className='px-0'>
              <input
                type='number'
                value={repos.s}
                onChange={(e) => setRepos({ ...repos, s: e.target.value })}
                className={styles.cadreTemps}
                min='0'
              />
            </div>
          </div>
        </div>
        <div className='col text-center'>
          Nombre de tours :
          <div className='row justify-content-center'>
            <button
              className='btn btn-primary'
              onClick={() => {
                if (laps > 1) {
                  setLaps(laps - 1);
                }
              }}
            >
              {' '}
              -{' '}
            </button>
            <input
              type='number'
              value={laps}
              onChange={(e) => setLaps(e.target.value)}
              className='form-control col-2 mx-2 text-center'
              min='1'
            />
            <button
              className='btn btn-primary'
              onClick={() => setLaps(laps + 1)}
            >
              {' '}
              +{' '}
            </button>
          </div>
        </div>
        <p></p>
        <p></p>
      </div>
      <audio ref={bip} src={bipSound}></audio>
      <audio ref={bip2} src={bipSound2}></audio>
    </>
  );
};

export default Minuteur;
