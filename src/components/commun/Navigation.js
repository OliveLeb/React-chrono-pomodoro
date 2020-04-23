import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
const Navigation = () => {
  return (
    <Navbar bg='light' expand='sm'>
      <Navbar.Brand>
        <NavLink to='/' className='nav-item nav-link'>
          Home
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink to='/chrono' className='nav-item nav-link'>
            Chrono
          </NavLink>

          <NavLink to='/minuteur' className='nav-item nav-link'>
            Minuteur
          </NavLink>
          <NavLink to='/minuteur2' className='nav-item nav-link'>
            Minuteur2
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
