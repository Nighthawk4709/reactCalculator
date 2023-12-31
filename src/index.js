import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// index.js is the entrypoint of a react application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);