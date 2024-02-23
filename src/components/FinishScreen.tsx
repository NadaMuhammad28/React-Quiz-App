import React from 'react';
import { useQuizContext } from '../context/quiz.context';
import { QuizState, RESTART_QUIZ } from '../reducer';

export default function FinishScreen() {
  const state: QuizState = useQuizContext();
  const { highScore, dispatch } = state;

  const handleRestartClick = () => {
    dispatch({ type: RESTART_QUIZ });
  };
  return (
    <div>
      FinishScreen{highScore}
      <button onClick={handleRestartClick}>Restart</button>
    </div>
  );
}
