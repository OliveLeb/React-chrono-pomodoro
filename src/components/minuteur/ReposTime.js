import React, { useContext } from 'react';
import { reposMinute, reposSeconde } from '../../actions/MinuteurActions';
import styles from './Minuteur.module.css';
import { StateContext, DispatchContext } from './Minuteur';

const ReposTime = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { repos } = state;

  return (
    <div className='text-center m-5'>
      Temps de repos
      <div className='row justify-content-center align-items-center'>
        <div className='px-0'>
          <input
            type='number'
            value={repos.m}
            onChange={reposMinute(dispatch)}
            className={styles.cadreTemps}
            min='0'
          />
        </div>
        <span className='mx-2'> : </span>
        <div className='px-0'>
          <input
            type='number'
            value={repos.s}
            onChange={reposSeconde(dispatch)}
            className={styles.cadreTemps}
            min='0'
          />
        </div>
      </div>
    </div>
  );
};

export default ReposTime;
