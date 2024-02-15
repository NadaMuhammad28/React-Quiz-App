import React from 'react';
import { CHECK_ANSWER, State } from '../reducer/reducer';

export default function Question({
  question,
  dispatch,
  hasAnswered,
}: QuestionProp) {
  console.log(question);
  function handleChosenAnswer(index: number) {
    dispatch({
      type: CHECK_ANSWER,
      payload: {
        correctAnswerIndex: question.correctOption,
        points: question.points,
        chosenIndex: index,
      },
    });
    console.log(hasAnswered);
  }
  return (
    <article>
      <h3>{question.question}</h3>
      <div className='options'>
        {question.options.map((option: string, index: number) => (
          <button
            onClick={() => handleChosenAnswer(index)}
            className={`btn btn-option ${
              hasAnswered
                ? index == question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            disabled={hasAnswered}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </article>
  );
}

export interface QuestionProp extends State {
  question: any;
}
