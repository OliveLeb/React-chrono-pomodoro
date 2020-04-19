import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/chrono'>Chrono</NavLink>
      <NavLink to='/minuteur'>Minuteur</NavLink>
    </nav>
  );
};

export default Navigation;
