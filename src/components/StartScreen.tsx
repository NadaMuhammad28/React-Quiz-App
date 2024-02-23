import { QuizState, START } from '../reducer';
import { useQuizContext } from '../context/quiz.context';

export default function StartScreen() {
  const state: QuizState = useQuizContext();

  const { dispatch } = state;

  return <button onClick={() => dispatch({ type: START })}>Start</button>;
}
