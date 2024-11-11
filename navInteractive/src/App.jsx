// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteProvider } from './context/RouteContext';
import NavComponent from './components/NavComponent';
import './styles/NavComponent.css';
import './App.css';

function App() {
  return (
    <RouteProvider>
      <Router>
        <NavComponent />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </Router>
    </RouteProvider>
  );
}

export default App;
