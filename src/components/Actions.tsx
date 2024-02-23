import React, { useEffect, useState } from 'react';
import { FINISH_QUIZ, NEXT_QUESTION, QuizState } from '../reducer';
import { useQuizContext } from '../context/quiz.context';

export default function Actions() {
  const state: QuizState = useQuizContext();

  const { hasAnswered, dispatch } = state;

  const [quizTime, setQuizTime] = useState(10);

  function handleNextQuestion() {
    dispatch({ type: NEXT_QUESTION });
  }

  useEffect(() => {
    let quizTimeId = setInterval(() => {
      if (quizTime === 0) {
        dispatch({ type: FINISH_QUIZ });
      }
      setQuizTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(quizTimeId);
  });
  return (
    <footer>
      <div>{quizTime}</div>

      <div>
        {hasAnswered && <button onClick={handleNextQuestion}>Next</button>}
      </div>
    </footer>
  );
}
