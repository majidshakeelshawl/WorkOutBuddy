import React from 'react';
import ReactDOM from 'react-dom/client';
import { WorkoutsContextProvider } from './context/Workouts.context';
import { AuthContextProvider } from './context/Auth.context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
