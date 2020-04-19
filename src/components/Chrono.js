import React, { useReducer, useState, useEffect } from 'react';

/*
const reducer = (state, action) => {
  switch(action.type){
    case:
      return
    case:
      return
    default:
      return state;
}
}*/

const Chrono = () => {
  // const [] = useReducer()
  const [startTime, setStartTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [second, setSecond] = useState(0);

  const toggleIsActive = () => {
    setIsActive(!isActive);
    setStartTime(Date.now());
  };
  const reset = () => {
    setStartTime(0);
    setIsActive(false);
    setSecond(0);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecond(Math.floor((Date.now() - startTime) / 100));
      }, 100);
    } else if (!isActive && startTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  return (
    <>
      <div>Le Chrono</div>

      <p>{second}</p>
      <button onClick={toggleIsActive}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Chrono;
