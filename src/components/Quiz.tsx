import Bar from './Bar';
import Question from './Question';
import Actions from './Actions';
import { useEffect } from 'react';
import { State } from '../reducer/reducer';

export default function Quiz({
  questions,
  index,
  dispatch,
  totalPoints,
  totalQuestions,
  points,
  hasAnswered,
}: State) {
  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       console.log(new Date(10).getMinutes());
  //     }, 1000);
  //     return () => clearInterval(timerId);
  //   }, []);
  return (
    <>
      <Bar
        totalQuestions={totalQuestions}
        questionNum={index + 1}
        totalPoints={totalPoints}
        points={points}
      />
      <Question
        hasAnswered={hasAnswered}
        question={questions[index]}
        dispatch={dispatch}
      />
      <Actions dispatch={dispatch} hasAnswered={hasAnswered} />
    </>
  );
}
