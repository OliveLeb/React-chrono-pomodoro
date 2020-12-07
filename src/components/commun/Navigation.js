import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {




  return (

    <header style={{padding:'10px 0'}}>
      <nav>
        <ul style={{display:'flex',marginBottom:0,fontSize:'1.2rem'}}>
          <li> 
            <NavLink to='/chrono' className='nav-item nav-link'>
              Chrono
            </NavLink>
          </li>
          <li>
            <NavLink to='/minuteur' className='nav-item nav-link'>
              Minuteur
            </NavLink>
          </li>
        </ul>
       
            
      </nav>
    </header>
    
  );
};

export default Navigation;
