import React, { useReducer, useEffect, useRef, useState } from 'react';
import MinuteurReducer, { initialState } from '../../reducers/MinuteurReducer';
import styles from './Minuteur.module.css';
import WorkTime from './WorkTime';
import ReposTime from './ReposTime';
import LapsNumber from './LapsNumber';
import bipSound from '../../sound/End.wav';
import bipSound2 from '../../sound/Bleep.wav';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import {
  setCount,
  toggleActive,
  switchRepos,
  switchTravail,
  resetCount,
  timeLeftSeconde,
  timeLeftMinute,
  reset,
  toggleMinute,
} from '../../actions/MinuteurActions';

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const Minuteur2 = () => {
  const [soundOn, setSoundOn] = useState(true);
  //const [isMinute, setIsMinute] = useState(false);
  const bip = useRef();
  const bip2 = useRef();
  const [state, dispatch] = useReducer(MinuteurReducer, initialState);
  const {
    sessionName,
    time,
    count,
    timeLeft,
    isActive,
    laps,
    isMinute,
  } = state;

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  useEffect(() => {
    let interval = null;

    const handleSwitch = () => {
      if (sessionName === 'Travail') {
        switchRepos(dispatch);
      } else if (sessionName === 'Repos') switchTravail(dispatch);
    };

    const compteurTour = () => {
      if (sessionName === 'Repos') setCount(dispatch);
    };
    const stop = () => {
      toggleActive(dispatch);
      resetCount(dispatch);
    };

    if (count < laps) {
      if (isActive && timeLeft.m >= 0 && timeLeft.s >= 0 && !isMinute) {
        if (timeLeft.m === 0 && timeLeft.s === 4 && soundOn) bip.current.play();
        else if (timeLeft.m === 0 && timeLeft.s === 1 && soundOn)
          bip2.current.play();
        interval =
          timeLeft.m >= 0 &&
          timeLeft.s >= 0 &&
          setInterval(() => {
            if (timeLeft.s > 0 && timeLeft.m >= 0) {
              timeLeftSeconde(dispatch);
            } else if (timeLeft.m > 0 && timeLeft.s === 0) {
              timeLeftMinute(dispatch);
            }
          }, 1000);
        if (timeLeft.m === 0 && timeLeft.s === 0) toggleMinute(dispatch);
      } else if (isActive && timeLeft.m === 0 && timeLeft.s === 0 && isMinute) {
        interval = setInterval(() => {
          if (timeLeft.s === 0 && timeLeft.m >= 0) {
            timeLeftMinute(dispatch);
          } else {
            timeLeftSeconde(dispatch);
          }
        }, 1000);
        toggleMinute(dispatch);
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
  }, [timeLeft, isActive, count, laps, soundOn, sessionName, time, isMinute]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <>
          <div className='d-flex justify-content-between mb-5 mx-3 mt-5'>
            <h1>Minuteur</h1>
            <p>
              {' '}
              Utilisation hooks useReducer et React.createContext, useContext
            </p>
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
              timeLeft.s <= 5 && timeLeft.m === 0
                ? styles.currentTimeRed
                : styles.currentTime
            }
          >
            {timeLeft.m} : {timeLeft.s}
          </div>

          <div className='text-center my-5'>
            <button
              onClick={toggleActive(dispatch)}
              className='btn btn-primary mx-2'
            >
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button
              className='btn btn-secondary mx-2'
              onClick={reset(dispatch)}
            >
              Reset
            </button>
          </div>
          <WorkTime />
          <ReposTime />
          <LapsNumber />
          <audio ref={bip} src={bipSound}></audio>
          <audio ref={bip2} src={bipSound2}></audio>
        </>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default Minuteur2;
