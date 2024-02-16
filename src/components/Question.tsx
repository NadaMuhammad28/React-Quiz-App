import { CHECK_ANSWER } from '../reducer/reducer';
import { useQuizContext } from '../context/quiz.context';

export default function Question() {
  const state: any = useQuizContext();
  const question: any = state.questions[state.index];
  console.log(question);

  const hasAnswered = state.hasAnswered;
  console.log(question);
  function handleChosenAnswer(index: number) {
    state.dispatch({
      type: CHECK_ANSWER,
      payload: {
        correctAnswerIndex: question.correctoption,
        points: question.points,
        chosenIndex: index,
      },
    });
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
                ? index == question.correctoption
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
