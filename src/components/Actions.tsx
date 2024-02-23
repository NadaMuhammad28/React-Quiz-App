import React, { useEffect, useState } from 'react';
import { FINISH_QUIZ, NEXT_QUESTION, QuizState } from '../reducer';
import { useQuizContext } from '../context/quiz.context';
import { formatQuizTime } from '../utils/utility';

export default function Actions() {
  const state: QuizState = useQuizContext();

  const { hasAnswered, dispatch, quizTime: initialTime } = state;

  const [quizTime, setQuizTime] = useState(initialTime);

  function handleNextQuestion() {
    dispatch({ type: NEXT_QUESTION });
  }

  function handleQuizTime() {
    if (quizTime === 0) {
      dispatch({ type: FINISH_QUIZ });
    }
    setQuizTime((t) => t - 1);
  }

  useEffect(() => {
    const quizTimeId = setInterval(handleQuizTime, 1000);

    return () => clearInterval(quizTimeId);
  });
  return (
    <footer>
      <div>{formatQuizTime(quizTime)}</div>

      <div>
        {hasAnswered && <button onClick={handleNextQuestion}>Next</button>}
      </div>
    </footer>
  );
}
