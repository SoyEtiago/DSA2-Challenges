import React, { useEffect } from 'react';
import { useRoute } from '../context/RouteContext';
import { useLocation } from 'react-router-dom';

const NavComponent = () => {
  const { state, dispatch } = useRoute();
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: 'SET_ACTIVE_ROUTE', payload: location.pathname });
  }, [location, dispatch]);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={`nav-item ${state.activeRoute === '/' ? 'active' : ''}`}>
          <a href="/">Home</a>
        </li>
        <li className={`nav-item ${state.activeRoute === '/about' ? 'active' : ''}`}>
          <a href="/about">About</a>
        </li>
        <li className={`nav-item ${state.activeRoute === '/services' ? 'active' : ''}`}>
          <a href="/services">Services</a>
        </li>
        <li className={`nav-item ${state.activeRoute === '/contact' ? 'active' : ''}`}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;