import React, { useContext } from 'react';
import { workMinute, workSeconde } from '../../actions/MinuteurActions';
import styles from './Minuteur.module.css';
import { StateContext, DispatchContext } from './Minuteur2';

const WorkTime = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { time } = state;

  return (
    <div className='text-center m-5'>
      Temps de travail
      <div className='row justify-content-center align-items-center'>
        <div className='px-0'>
          <input
            type='number'
            required
            value={time.m}
            onChange={workMinute(dispatch)}
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
            onChange={workSeconde(dispatch)}
            className={styles.cadreTemps}
            min='0'
          />
        </div>
      </div>
    </div>
  );
};

export default WorkTime;
