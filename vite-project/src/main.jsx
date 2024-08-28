import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="My First App"/>
  </React.StrictMode>
)
