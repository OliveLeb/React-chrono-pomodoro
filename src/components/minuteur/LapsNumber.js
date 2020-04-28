import React, { useContext } from 'react';
import { lapsNumber, decLaps, incLaps } from '../../actions/MinuteurActions';
//import styles from './Minuteur.module.css';
import { StateContext, DispatchContext } from './Minuteur2';

const LapsNumber = () => {
  const dispatch = useContext(DispatchContext);
  const { laps } = useContext(StateContext);
  // const { laps } = state;

  return (
    <div className='col text-center'>
      Nombre de tours :
      <div className='row justify-content-center'>
        <button className='btn btn-primary' onClick={decLaps(dispatch)}>
          {' '}
          -{' '}
        </button>
        <input
          type='number'
          value={laps}
          onChange={lapsNumber(dispatch)}
          className='form-control col-2 mx-2 text-center'
          min='1'
        />
        <button className='btn btn-primary' onClick={incLaps(dispatch)}>
          {' '}
          +{' '}
        </button>
      </div>
    </div>
  );
};

export default LapsNumber;
