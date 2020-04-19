import React, { useState } from 'react';

const Minuteur = () => {
  const [time, setTime] = useState(0);

  return (
    <>
      <div>Le minuteur</div>
      <div>
        <h3>Temps :</h3>
        <input
          type='number'
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
    </>
  );
};

export default Minuteur;
