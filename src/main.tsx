import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QuizContextProvider } from './context/quiz.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>
);
