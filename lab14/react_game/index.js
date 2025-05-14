import React from 'react';
import ReactDOM from 'react-dom/client';
import OXGame from './App';
import './styles.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <OXGame />
  </React.StrictMode>
);
