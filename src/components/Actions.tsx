import React from 'react';
import { NEXT_QUESTION, QuizState } from '../reducer/reducer';
import { useQuizContext } from '../context/quiz.context';

export default function Actions() {
  const state: QuizState = useQuizContext();

  const { hasAnswered, dispatch } = state;
  function handleNextQuestion() {
    dispatch({ type: NEXT_QUESTION });
  }
  return (
    <footer>
      {hasAnswered && <button onClick={handleNextQuestion}>Next</button>}
    </footer>
  );
}
