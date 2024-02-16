import { useQuizContext } from '../context/quiz.context';
import { QuizState } from '../reducer/reducer';
export default function Bar() {
  const state: QuizState = useQuizContext();
  console.log('s', state);
  const { totalPoints, points, totalQuestions, index } = state;
  const questionNum = index + 1;
  return (
    <header className='progress'>
      <progress max={totalQuestions} value={questionNum} />

      <p>
        Question <strong>{questionNum}</strong> / {totalQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}
