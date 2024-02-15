import React from 'react';
import { NEXT_QUESTION, State } from '../reducer/reducer';

export default function Actions({ dispatch, hasAnswered }: State) {
  function handleNextQuestion() {
    dispatch({ type: NEXT_QUESTION });
  }
  return (
    <footer>
      {hasAnswered && <button onClick={handleNextQuestion}>Next</button>}
    </footer>
  );
}
