import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//will give two hellos if working with react strict mode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

