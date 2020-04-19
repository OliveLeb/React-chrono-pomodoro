import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' className='nav-item nav-link'>
        Home
      </NavLink>
      <NavLink to='/chrono' className='nav-item nav-link'>
        Chrono
      </NavLink>
      <NavLink to='/minuteur' className='nav-item nav-link'>
        Minuteur
      </NavLink>
    </nav>
  );
};

export default Navigation;
